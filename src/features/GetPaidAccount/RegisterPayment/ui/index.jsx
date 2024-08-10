import React from "react"
import "./registerPayment.scss"
import { CardInfoInput, DefaultInput } from "../../../../shared"

const RegisterPayment = () => {
  return (
    <div className="register-payment-form-block">
      <div className="form-element">
        <div className="form-wrapper">
          <DefaultInput
            text={"First name"}
            placeholder={"Enter your first name"}
          />
          <DefaultInput
            text={"Last name"}
            placeholder={"Enter your last name"}
          />
          <DefaultInput text={"Email"} placeholder={"Enter your email"} />
        </div>
      </div>
      <div className="form-element">
        <p className="title18-semibold-outfit text-element">Credit card</p>
        <div className="form-wrapper">
          <DefaultInput
            text={"Card number"}
            placeholder={"XXXX XXXX XXXX XXXX"}
          />
          <div className="form-flex">
            <div className="flex">
              <CardInfoInput
                maxLength={2}
                placeholder={"YY"}
                text={"Expires on"}
              />
              <CardInfoInput maxLength={2} placeholder={"MM"} text={"⠀"} />
            </div>

            <CardInfoInput maxLength={3} placeholder={"CVC"} text={"CVC"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPayment
