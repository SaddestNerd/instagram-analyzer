import React from "react"
import { DefaultInput, DefaultButton } from "../../../../shared"
import { Icon } from "../../../../shared"
import "./accessToApp.scss"
import { useAccessForm } from "../../../../shared/lib/hooks/useAccessForm"

const AccessToApp = ({ onClick }) => {
  const {
    username,
    password,
    showPassword,
    togglePasswordVisibility,
    handleUsernameChange,
    handlePasswordChange,
    isValidUsername,
    isMissingAt,
    isMissingDot,
    isButtonDisabled,
    isPasswordShort,
  } = useAccessForm()
  return (
    <div className="access-app-block">
      <div>
        <DefaultInput
          placeholder="Enter your email"
          onChange={handleUsernameChange}
          value={username}
          text="Email"
          type="email"
          isError={!isValidUsername && username.length > 0}
        />
      </div>
      {!isValidUsername && username.length > 0 && (
        <p className="title11-regular-outfit error-message">
          {isMissingAt
            ? 'Email must contain "@" symbol.'
            : isMissingDot
              ? 'Email must contain a dot after the "@" symbol.'
              : "Please enter a valid email address."}
        </p>
      )}
      <div className="acess-app-input">
        <DefaultInput
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          value={password}
          text="Password"
          type={showPassword ? "text" : "password"}
          isError={isPasswordShort}
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
        <p className="title11-regular-outfit error-message">
          The password must be 6 characters long or more.
        </p>
      )}
      <div className="acess-app-button">
        <DefaultButton
          text="sign up"
          onClick={onClick}
          isDisabled={isButtonDisabled}
          link="/enter-account"
        />
      </div>
    </div>
  )
}

export default AccessToApp
