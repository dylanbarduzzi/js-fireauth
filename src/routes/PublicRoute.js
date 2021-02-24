import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { HomeRoute } from "./routes"

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to={HomeRoute} />
      ) : (
        <Component {...props} />
      )
    )} />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PublicRoute)