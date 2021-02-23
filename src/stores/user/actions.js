import { SET_USER, UNSET_USER } from "./types"

export const setUser = () => ({
  type: SET_USER
})

export const unsetUser = () => ({
  type: UNSET_USER
})
