import { SET_USER, UNSET_USER } from "./types"

export const setUser = user => ({
  type:  SET_USER,
  uid:   user.uid,
  email: user.email
})

export const unsetUser = () => ({
  type: UNSET_USER
})
