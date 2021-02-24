import React, { useState } from "react"
import { connect } from "react-redux"
import { startLogin } from "../stores/auth/actions"

const LoginPage = props => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    props.startLogin(email, password)
  }

  return (
    <div>
      <h2>Log in to your account</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button>Log In</button>
      </form>
    </div>
  )
}

export default connect(undefined, { startLogin })(LoginPage)