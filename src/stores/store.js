import { compose, createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import authReducer from "./auth/reducer"
import userReducer from "./user/reducer"

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducers = combineReducers({
  auth: authReducer,
  user: userReducer
})

const configureStore = () => {
  return createStore(
    reducers,
    composer(applyMiddleware(thunk))
  )
}

export default configureStore
