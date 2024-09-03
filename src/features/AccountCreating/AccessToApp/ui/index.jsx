import React from "react"
import { DefaultInput, DefaultButton } from "../../../../shared"
import { Icon } from "../../../../shared"
import "./accessToApp.scss"
import { useAccessForm } from "../../../../shared/lib/hooks/useAccessForm"
import useAuthData from "../../../../shared/lib/hooks/auth/auth.hook"

const AccessToApp = ({ token }) => {
  const {
    email,
    password,
    showPassword,
    togglePasswordVisibility,
    handleEmailChange,
    handlePasswordChange,
    isValidEmail,
    isMissingAt,
    isMissingDot,
    isButtonDisabled,
    isPasswordShort,
  } = useAccessForm()

  const { signUp } = useAuthData();

  const handleSubmit = () => {
    signUp(email, password, token)
  };
  
  console.log(email, password, token)
  return (
    <div className="access-app-block">
      <div>
        <DefaultInput
          placeholder="Enter your email"
          onChange={handleEmailChange}
          value={email}
          text="Email"
          type="email"
          isError={!isValidEmail && email.length > 0}
        />
      </div>
      {!isValidEmail && email.length > 0 && (
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
          onClick={handleSubmit}
          isDisabled={isButtonDisabled}
       
        />
      </div>
    </div>
  )
}

export default AccessToApp
