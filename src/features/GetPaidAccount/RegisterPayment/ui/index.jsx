import React, { useRef, useState } from "react"
import "./registerPayment.scss"
import { CardInfoInput, DefaultInput } from "../../../../shared"
import { CardElement } from "@recurly/react-recurly"


const RegisterPayment = ({ handleSubmit, changeHandlerData, formRef, formData }) => {



  return (
    <div className="register-payment-form-block">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="form-element">
          <div className="form-wrapper">
            <DefaultInput
              text={"First name"}
              placeholder={"Enter your first name"}
              value={formData.firstName}
              onChange={changeHandlerData}
              dataRecurly="first_name"
              name="firstName"
            />
            <DefaultInput
              text={"Last name"}
              placeholder={"Enter your last name"}
              value={formData.lastName}
              onChange={changeHandlerData}
              dataRecurly="last_name"
              name="lastName"
            />

            <DefaultInput text={"Email"} placeholder={"Enter your email"}
              dataRecurly="email"
              name="email"
              value={formData.email}
              onChange={changeHandlerData} />

          </div>
        </div>
        <div className="form-element">
          <p className="title18-semibold-outfit text-element">Credit card</p>
          <div className="form-wrapper">
            <CardElement onSubmit={handleSubmit} />
          </div>
        </div>
      </form>

    </div>
  )
}

export default RegisterPayment
