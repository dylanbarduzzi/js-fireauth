import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useDispatch } from "react-redux"

import { auth } from "./lib/firebase"
import { setAuth, unsetAuth } from "./stores/auth/actions"
import { setUser, unsetUser } from "./stores/user/actions"

import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import LoadingPage from "./components/LoadingPage"
import NotFoundPage from "./components/NotFoundPage"

import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"

import {
  HomeRoute,
  LoginRoute
} from "./routes/routes"

const App = () => {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(setAuth())
        dispatch(setUser(user))
      } else {
        dispatch(unsetAuth())
        dispatch(unsetUser())
      }
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
        <PrivateRoute exact={true} path={HomeRoute} component={HomePage} />
        <PublicRoute exact={true} path={LoginRoute} component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
