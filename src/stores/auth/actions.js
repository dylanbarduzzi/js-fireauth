import { SET_AUTH, UNSET_AUTH } from "./types"
import { auth } from "../../lib/firebase"
import { setUser, unsetUser } from "../user/actions"

export const setAuth = () => ({
  type: SET_AUTH
})

export const unsetAuth = () => ({
  type: UNSET_AUTH
})

export const startLogin = (email, password) => dispatch => {
  auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      dispatch(setAuth())
      dispatch(setUser(res.user))
    })
    .catch(err => {
      console.log(`[ERROR] - ${err}`)
      dispatch(unsetAuth())
      dispatch(unsetUser())
    })
}

export const startLogout = () => dispatch => {
  auth.signOut()
    .then(() => {
      dispatch(unsetAuth())
      dispatch(unsetUser())
    })
    .catch(err => {
      console.log(`[ERROR] - ${err}`)
      dispatch(unsetAuth())
      dispatch(unsetUser())
    })
}