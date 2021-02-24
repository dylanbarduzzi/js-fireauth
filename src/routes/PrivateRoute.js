import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { LoginRoute } from "./routes"

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={LoginRoute} />
      )
    )} />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)