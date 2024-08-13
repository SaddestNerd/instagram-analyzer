import React, { useState } from "react"
import { AppInput, AppButton } from "../../../../shared"
import "./restore.scss"

const Restore = ({ onClick, nextForm }) => {
  const [username, setUsername] = useState("")

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  const isValidUsername = emailRegex.test(username)
  const isMissingAt = !username.includes("@")
  const isMissingDot = username.includes("@") && !username.includes(".")

  const isButtonDisabled = username.length < 6 || !isValidUsername
  return (
    <div className="restore-block">
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
      <div className="restore-button">
        <AppButton
          text="Restore password"
          onClick={onClick}
          isDisabled={isButtonDisabled}
        />
      </div>
    </div>
  )
}

export default Restore
