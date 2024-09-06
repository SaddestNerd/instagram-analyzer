import React, { useCallback } from "react"
import { AppInput, AppButton } from "../../../../shared"
import "./restore.scss"
import { useAccessForm } from "../../../../shared/lib/hooks/useAccessForm"
import { useNavigate } from "react-router-dom"
import { Auth } from "../../../../shared/api/axios/requests/auth/auth.service"


const Restore = ({ goBack }) => {
  const {
    email,
    handleEmailChange,
    isValidEmail,
    isMissingAt,
    isMissingDot,
    isButtonDisabledEmail,
  } = useAccessForm()

  const navigate = useNavigate();

  const handleReset = useCallback(async () => {
    try {
      const result = await Auth.resetPassword(email);
      if (result) {
        goBack()
      }
    } catch (error) {
      alert(error.message);
    }
  }, [email, navigate]);

  
  return (
    <div className="restore-block">
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
      <div className="restore-button">
        <AppButton
          text="Restore password"
          onClick={handleReset}
          isDisabled={isButtonDisabledEmail}
        />
      </div>
    </div>
  )
}

export default Restore
