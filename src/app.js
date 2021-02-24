import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { auth } from "./lib/firebase"

import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import LoadingPage from "./components/LoadingPage"
import NotFoundPage from "./components/NotFoundPage"

import {
  HomeRoute,
  LoginRoute
} from "./routes/routes"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log(user)
    })

    setLoading(false)

    return unsubscribe

  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={HomeRoute} component={HomePage} />
        <Route exact={true} path={LoginRoute} component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
