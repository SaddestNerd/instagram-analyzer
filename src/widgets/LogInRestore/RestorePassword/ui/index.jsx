import React from "react"
import "./restorePassword.scss"
import { Restore } from "../../../../features"
import { BackButton } from "../../../../shared"

const RestorePassword = ({ showPopup, goBack }) => {
  const handleClick = () => {
    goBack()
    showPopup("checkYourEmail")
  }

  return (
    <div className="restore-password-section">
      <div className="restore-password-block">
        <div className="restore-password-backicon-block">
          <BackButton onClick={goBack} />
        </div>
        <p className="title24-medium-urbanist">Restore Password</p>
        <p className="title14-regular-urbanist">
          Please enter the email address you provided when creating your account
        </p>
        <Restore onClick={handleClick} goBack={goBack} />
      </div>
    </div>
  )
}

export default RestorePassword
