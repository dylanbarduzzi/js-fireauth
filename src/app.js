import React, { useEffect, useState } from "react"
import { auth } from "./lib/firebase"
import LoadingPage from "./components/LoadingPage"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log(user)
    })

    setLoading(false)

    return unsubscribe

  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>Hello</div>
  )
}

export default App
