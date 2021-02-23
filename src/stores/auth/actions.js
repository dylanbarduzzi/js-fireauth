import { SET_AUTH, UNSET_AUTH } from "./types"

export const setAuth = () => ({
  type: SET_AUTH
})

export const unsetAuth = () => ({
  type: UNSET_AUTH
})
