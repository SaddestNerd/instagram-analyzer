import React, { useCallback } from "react"
import { AppInput, AppButton } from "../../../../shared"
import { Icon } from "../../../../shared"
import "./authorization.scss"
import { useAccessForm } from "../../../../shared/lib/hooks/useAccessForm"
import { Auth } from "../../../../shared/api/axios/requests/auth/auth.service"
import { useNavigate } from "react-router-dom"

const Authorization = ({ nextForm }) => {
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
    isLoginError,
    setIsLoginError
  } = useAccessForm()


  const navigate = useNavigate()
  const handleLogin = useCallback(async () => {
    try {
      const result = await Auth.loginUser(email, password)
      if (result) {
        navigate("/account-information")
      } else {
        setIsLoginError(true)
      }
    } catch (error) {
      setIsLoginError(true);
    }
  }, [email, password, navigate, setIsLoginError])

  return (
    <div className="authorization-block">
      <div>
        <AppInput
          placeholder="Enter your email address"
          onChange={handleEmailChange}
          value={email}
          text="Email Address"
          type="email"
          isError={isLoginError || !isValidEmail && email.length > 0}
          classAppInput="app-input-item"
        />
        {!isValidEmail && email.length > 0 && (
        <p className="title14-medium-urbanist error-message">
          {isMissingAt
            ? 'Email must contain "@" symbol.'
            : isMissingDot
              ? 'Email must contain a dot after the "@" symbol.'
              : "Please enter a valid email address."}
        </p>
      )}
      </div>

      <div className="authorization-input">
        <AppInput
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          value={password}
          text="Password"
          type={showPassword ? "text" : "password"}
          isError={isLoginError || isPasswordShort}
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
        <p className="title14-medium-urbanist error-message">
          At least 6 symbols
        </p>
      )}
      <div className="title16-medium-urbanist forgot-message">
        <button onClick={nextForm}>Forgot password</button>
      </div>
      {isLoginError && (
        <p className="title14-regular-urbanist error-message error-center">
          Invalid password or username
        </p>
      )}

      <div className="authorization-button">
        <AppButton text="Sign up" onClick={handleLogin}/>
      </div>
    </div>
  )
}

export default Authorization