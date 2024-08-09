import React from "react"
import "./payWindow.scss"
import { DefaultButton, DefaultInput } from "../../../../shared"
import { ApplePayBig, GooglePayBig } from "../../../../shared/lib/icons/icons"

const PayWindow = ({ svg }) => {
  return (
    <div className="pay-window">
      {svg === "apple" ? <ApplePayBig /> : <GooglePayBig />}
      <p className="title16-regular-outfit">
        Enter your e-mail to get an invoice
      </p>
      <DefaultInput placeholder={"Enter your e-mail"} text={"Email"} />
      <DefaultButton text={"COMPLETE PAYMENT"} isDisabled={true} />
    </div>
  )
}

export default PayWindow
