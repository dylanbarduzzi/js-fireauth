import { SET_USER, UNSET_USER } from "./types"

const initialState = {
  uid: null,
  email: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        uid: action.uid,
        email: action.email
      }
    case UNSET_USER:
      return {
        ...state,
        uid: null,
        email: null
      }
    default:
      return state
  }
}

export default userReducer
