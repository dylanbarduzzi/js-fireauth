import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "./styles/styles.scss"

import App from "./app"
import configureStore from "./stores/store"

const store = configureStore()

const RenderApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(<RenderApp />, document.getElementById("root"))
