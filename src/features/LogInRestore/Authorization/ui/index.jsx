import React, { useCallback, useState } from "react"
import { AppInput, AppButton } from "../../../../shared"
import { Icon } from "../../../../shared"
import "./authorization.scss"
import { useAccessForm } from "../../../../shared/lib/hooks/useAccessForm"
import {
	registerUser,
	loginUser,
	getUserInfo,
	logoutUser,
	resetPassword,
	bearerRoute,
} from '../../../../shared/api/axios/requests/auth/auth.service'


const Authorization = ({ onClick, nextForm }) => {
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
  
	const [userInfo, setUserInfo] = useState(null)

	const handleLogin = useCallback(async () => {
		await loginUser(email, password)
	}, [email, password])
  
  const handleGetUserInfo = useCallback(async () => {
		const info = await getUserInfo()
		setUserInfo(info)
	}, [])


  return (
    <div className="authorization-block">
      <div>
        <AppInput
          placeholder="Enter your email address"
          onChange={handleEmailChange}
          value={email}
          text="Email Address"
          type="email"
          isError={!isValidEmail && email.length > 0}
          classAppInput="app-input-item"
        />
      </div>
      {!isValidEmail && email.length > 0 && (
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
        <button  onClick={nextForm}>Forgot password</button>
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
          onClick={handleLogin}
          isDisabled={isButtonDisabled}
        />
      </div>
    </div>
  )
}

export default Authorization
