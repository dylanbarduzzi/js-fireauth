import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useDispatch } from "react-redux"

import { setAuth, unsetAuth } from "./stores/auth/actions"
import { setUser, unsetUser } from "./stores/user/actions"

import { useListener } from "./lib/hooks"

import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import LoadingPage from "./components/LoadingPage"
import NotFoundPage from "./components/NotFoundPage"

import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"

import {
  HomeRoute,
  AboutRoute,
  LoginRoute,
  RegisterRoute
} from "./routes/routes"

const App = () => {

  const user = useListener()
  const dispatch = useDispatch()

  if (user.uid) {
    dispatch(setAuth())
    dispatch(setUser(user))
  } else {
    dispatch(unsetAuth())
    dispatch(unsetUser())
  }

  if (user.loading) {
    return <LoadingPage />
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact={true} path={HomeRoute} component={HomePage} />
        <PrivateRoute exact={true} path={AboutRoute} component={AboutPage} />
        <PublicRoute exact={true} path={LoginRoute} component={LoginPage} />
        <PublicRoute exact={true} path={RegisterRoute} component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
