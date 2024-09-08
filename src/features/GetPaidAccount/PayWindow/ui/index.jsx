import React, { useEffect, useState, useRef } from "react"
import "./payWindow.scss"
import { DefaultButton, DefaultInput, Loader } from "../../../../shared"
import { ApplePayBig, GooglePayBig } from "../../../../shared/lib/icons/icons"
import { useRecurly, useCheckoutPricing } from "@recurly/react-recurly"
import usePaymentData from "../../../../shared/lib/hooks/payment/payment.hook"
import GetPaymentData from "../../../../shared/lib/hooks/payment/paymentSelector.hook"
import { useNavigate } from "react-router-dom"
import { useAccessForm } from "../../../../shared/lib/hooks/useAccessForm"

const PayWindow = ({ svg, isAppleDevice, price }) => {
  const googlePayButtonRef = useRef(null)
  const recurly = useRecurly()
  const {
    subscribeGooglePay,
    subscribeApplePay,
    dispatchPlan,
    dispatchCurrency,
  } = usePaymentData()
  const {
    email,
    setEmail,
    isValidEmail,
    isMissingAt,
    isMissingDot,
    isButtonDisabledEmail,
  } = useAccessForm()


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    emailRef.current = e.target.value
    setErrorLabel(null)
  }
  const [errorLabel, setErrorLabel] = useState(null)
  const emailRef = useRef(email)
  const navigate = useNavigate()
  const { loading, registerToken, error, currency, plan } = GetPaymentData()
  




  useEffect(() => {
    if (registerToken) {
      if (!loading) {
        navigate(`/account-create?token=${registerToken}`)
      }
    }
  }, [registerToken])

  useEffect(() => {
    if (!loading && currency && plan) {
      if (isAppleDevice) {
        const applePay = recurly.ApplePay({
          country: "US",
          currency: price.currency?.code,
          label: "My Subscription",
          total: price.now.total,
          callbacks: {
            onPaymentAuthorized: async ({ payment }) => {
              const { recurlyToken: token } = payment
              await subscribeApplePay({
                email: emailRef.current,
                payment,
                tokenId: token.id,
              })
              setErrorLabel(error)
            },
          },
        })

        applePay.ready(() => {
          const applePayButton = document.getElementById("my-apple-pay-button")
          if (applePayButton) {
            applePayButton.addEventListener("click", () => {
              try {
                applePay.begin()
              } catch (error) {}
            })
          }
        })

        applePay.on("error", (err) => {
          console.error("Apple Pay error", err)
        })

        return () => {
          applePay.off("error")
        }
      } else {
        const googlePay = recurly.GooglePay({
          currency: price.currency?.code,
          country: "US",
          total: price.now.total,
          googleMerchantId: "5427781066",
          billingAddressRequired: true,
          callbacks: {
            onPaymentAuthorized: async (paymentData) => {
              const { recurlyToken: token } = paymentData
              await subscribeGooglePay({
                paymentData,
                email: emailRef.current,
                tokenId: token.id,
              })
              setErrorLabel(error)
            },
          },
        })
        googlePay.on("ready", (googlePayButton) => {
          const container = document.getElementById(
            "google-pay-button-container"
          )
          if (googlePayButtonRef.current) {
            googlePayButtonRef.current.remove()
          }
          if (container) {
            container.appendChild(googlePayButton)
            googlePayButtonRef.current = googlePayButton
          }
        })

        googlePay.on("error", (err) => {
          console.error("Google Pay error", err)
        })

        return () => {
          googlePay.off("ready")
          googlePay.off("error")
          if (googlePayButtonRef.current) {
            googlePayButtonRef.current.remove()
          }
        }
      }
    }
  }, [currency, loading])

  return (
    <div className="pay-window" onClick={(e) => e.stopPropagation()}>
      {svg === "apple" ? <ApplePayBig /> : <GooglePayBig />}
      {loading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <div className="pay-window-block">
          <p className="title16-regular-outfit">
            Enter your e-mail to get an invoice
          </p>
          {!isValidEmail && email.length > 0 && (
            <p className="title14-medium-urbanist error-message-upper">
              {isMissingAt
                ? 'Email must contain "@" symbol.'
                : isMissingDot
                  ? 'Email must contain a dot after the "@" symbol.'
                  : "Please enter a valid email address."}
            </p>
          )}
          <DefaultInput
            text={"Email"}
            placeholder={"Enter your email"}
            dataRecurly="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            isError={!isValidEmail && email.length > 0}
          />
          {errorLabel && (
            <p className="title11-regular-outfit error-message">
              {errorLabel[0]} 
            </p>
          )}
          {isAppleDevice ? (
            <button
              disabled={isButtonDisabledEmail}
              className="apple-pay-button apple-pay-button-black"
              id="my-apple-pay-button"
            ></button>
          ) : (
            <div
              disabled={isButtonDisabledEmail}
              id="google-pay-button-container"
              className="google-pay-button-container"
            />
          )}
        </div>
      )} 
    </div>
  )
}

export default PayWindow