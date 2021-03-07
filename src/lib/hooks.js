import { useEffect, useState } from "react"
import { auth } from "./firebase"

export const useListener = () => {
  const [userId, setUserId] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid)
        setUserEmail(user.email)
        setUserLoading(false)
      } else {
        setUserId(null)
        setUserEmail(null)
        setUserLoading(false)
      }
    })

    return unsubscribe

  }, [])

  return {
    uid: userId,
    email: userEmail,
    loading: userLoading
  }
}