import React from "react"
import "./login.scss"
import { Authorization } from "../../../../features"
import { Icon } from "../../../../shared"

const Login = ({nextForm, onClick}) => {
  return (
    <div className="login-section">
      <div className="login-block">
        <p className="title32-semibold-urbanist">Analyze your Instagram account and gain valuable insights</p>
        <Authorization nextForm={nextForm} onClick={onClick}/>
      </div>
    </div>
  )
}

export default Login
