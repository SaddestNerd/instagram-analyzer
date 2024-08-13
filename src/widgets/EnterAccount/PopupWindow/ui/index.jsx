// PopupWindow.jsx
import React, { useEffect, useState } from "react"
import "./popupWindow.scss"
import { AppButton, Icon } from "../../../../shared"

const PopupWindow = ({ type, onClose }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    return () => setShow(false)
  }, [])

  const renderContent = () => {
    switch (type) {
      case "privateAccount":
        return (
          <>
            <Icon type="privateIcon" alt="PrivateIcon" width={90} height={90} />
            <p className="title24-medium-urbanist">Your account is private</p>
            <p className="title14-regular-urbanist">
              Unfortunately, the account you specified is private. Make it
              public to get analysis of your audience and engagement.
            </p>
            <AppButton
              text="How to make account public?"
              link="https://help.instagram.com/284802804971822/?helpref=hc_fnav"
            ></AppButton>
            <button
              className="title14-regular-urbanist cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>
          </>
        )
      case "accountNotFound":
        return (
          <>
            <Icon
              type="notFoundIcon"
              alt="NotFoundIcon"
              width={90}
              height={90}
            />
            <p className="title24-medium-urbanist">Account not found</p>
            <p className="title14-regular-urbanist">
              Unfortunately, we were unable to find such an account to analyze
              it. Check that the name you entered is correct.
            </p>
            <AppButton text="Got it" onClick={onClose}></AppButton>
          </>
        )
      case "somethingWentWrong":
        return (
          <>
            <Icon type="wrongIcon" alt="WrongIcon" width={90} height={90} />
            <p className="title24-medium-urbanist">Something went wrong...</p>
            <p className="title14-regular-urbanist">
              Unfortunately, we were unable to find your subscription. Please
              check that the email address and password you entered are correct,
              or purchase a subscription if you haven't done it yet.
            </p>
            <AppButton text="Continue" onClick={onClose}></AppButton>
          </>
        )
        case "checkYourEmail":
        return (
          <>
            <Icon type="checkEmailIcon" alt="CheckEmailIcon" width={90} height={90} />
            <p className="title24-medium-urbanist">Check your email</p>
            <p className="title14-regular-urbanist">
            We have sent instructions for changing your password to the specified email address.
            </p>
            <AppButton text="Got it" onClick={onClose}></AppButton>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className={`popup ${show ? "show" : "hide"}`}>
      <div className="popup-content">{renderContent()}</div>
    </div>
  )
}

export default PopupWindow
