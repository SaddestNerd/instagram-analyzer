import React, { useState } from "react"
import { AppInput, AppButton } from "../../../../shared"
import { Icon } from "../../../../shared"
import "./authorization.scss"

const Authorization = ({ onClick, nextForm }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  const isValidUsername = emailRegex.test(username)
  const isMissingAt = !username.includes("@")
  const isMissingDot = username.includes("@") && !username.includes(".")

  const isButtonDisabled =
    username.length < 6 || password.length < 6 || !isValidUsername
  const isPasswordShort = password.length < 6 && password.length > 0
  return (
    <div className="authorization-block">
      <div>
        <AppInput
          placeholder="Enter your email address"
          onChange={handleUsernameChange}
          value={username}
          text="Email Address"
          type="email"
          isError={!isValidUsername && username.length > 0}
          classAppInput="app-input-item"
        />
      </div>
      {!isValidUsername && username.length > 0 && (
        <p className="title14-medium-urbanist error-message">
          {isMissingAt
            ? 'Email must contain "@" symbol.'
            : isMissingDot
              ? 'Email must contain a dot after the "@" symbol.'
              : "Please enter a valid email address."}
        </p>
      )}
      <div className="authorization-input">
        <AppInput
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          value={password}
          text="Password"
          type={showPassword ? "text" : "password"}
          isError={isPasswordShort}
          classAppInput="app-input-item"
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          <Icon
            type={showPassword ? "openEye" : "closedEye"}
            alt={showPassword ? "openEye" : "closedEye"}
            width={24}
            height={24}
            strokeColor="#B0AECC"
            className={`eye-icon ${showPassword ? "eye-open" : "eye-closed"}`}
          />
        </span>
      </div>
      {isPasswordShort && (
        <p className="title14-regular-urbanist error-message">
          The password must be 6 characters long or more.
        </p>
      )}
      <div className="title16-medium-urbanist forgot-message">
        <button onClick={nextForm}>Forgot password</button>
      </div>
      {/* {УСЛОВИЕ(
        <p className="title14-regular-urbanist error-message error-center">
          УСЛОВИЕ
         There is no user record corresponding to this identifier. The user May have been deleted.
         УСЛОВИЕ
         The password is invalid or the user does not have a password.
        </p>
      )} */}
      <div className="authorization-button">
        <AppButton
          text="Sign up"
          onClick={onClick}
          isDisabled={isButtonDisabled}
        />
      </div>
    </div>
  )
}

export default Authorization
