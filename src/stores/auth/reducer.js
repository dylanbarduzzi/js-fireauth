import { SET_AUTH, UNSET_AUTH } from "./types"

const initialState = {
  isAuthenticated: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: true
      }
    case UNSET_AUTH:
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default authReducer
