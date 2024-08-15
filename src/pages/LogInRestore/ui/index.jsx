import React, { useState } from "react"
import "./logIn-restore.scss"
import { Login, RestorePassword, PopupWindow } from "../../../widgets"

const LoginRestorePage = () => {
  const [currentForm, setCurrentForm] = useState(0)
  const [popupType, setPopupType] = useState(null)
  const nextForm = () => {
    setCurrentForm(1)
  }
  const goBack = () => {
    setCurrentForm(0)
  }
  const closePopup = () => {
    setPopupType(null)
  }
  return (
    <div className="login-page">
      <div
        className={`login-wrapper ${popupType ? "blur-background" : ""} ${currentForm === 0 ? "background-pic-login" : "background-pic-restore"}`}
      >
        {currentForm === 0 ? (
          <Login nextForm={nextForm} />
        ) : (
          <RestorePassword goBack={goBack} showPopup={setPopupType} />
        )}
      </div>
      {popupType && (
        <>
          <div className="overlay"></div>
          <PopupWindow type={popupType} onClose={closePopup} />
        </>
      )}
    </div>
  )
}

export default LoginRestorePage
