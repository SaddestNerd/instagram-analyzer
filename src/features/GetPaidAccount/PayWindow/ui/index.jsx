import React, { useEffect, useState, useRef } from "react"
import "./payWindow.scss"
import { DefaultButton, DefaultInput, Loader } from "../../../../shared"
import { ApplePayBig, GooglePayBig } from "../../../../shared/lib/icons/icons"
import { useRecurly, useCheckoutPricing } from "@recurly/react-recurly"
import usePaymentData from "../../../../shared/lib/hooks/payment/payment.hook"
import GetPaymentData from "../../../../shared/lib/hooks/payment/paymentSelector.hook"
import { useNavigate } from "react-router-dom"

const PayWindow = ({ svg, isAppleDevice }) => {
  const googlePayButtonRef = useRef(null)
  const recurly = useRecurly()
  const {
    subscribeGooglePay,
    subscribeApplePay,
    dispatchPlan,
    dispatchCurrency,
  } = usePaymentData()

  const [email, setEmail] = useState("")
  const [errorLabel, setErrorLabel] = useState(null)
  const emailRef = useRef(email)
  const navigate = useNavigate()
  const { loading, registerToken, error, currency, plan } = GetPaymentData()
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedPlan, setSelectedPlan] = useState("plan-code");
  useEffect(() => {

    dispatchPlan();
    dispatchCurrency();
  }, []);

  useEffect(() => {
  
    if (plan) {
      setSelectedPlan(plan.planCode);
    }
    if (currency) {
      setSelectedCurrency(currency.currencyCode);
    }
  }, []);

  const [{ price, loading: pricingLoading }, setCheckoutPricing] =
    useCheckoutPricing({
      subscriptions: [
        {
          plan: selectedPlan,
        },
      ],
      currency: selectedCurrency,
    });

  // useEffect(() => {
  //   if (!pricingLoading) {
  //     console.log("Checkout pricing:", price.now.total);
  //   }
  // }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    emailRef.current = e.target.value
    setErrorLabel(null)
  }

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

          <DefaultInput
            text={"Email"}
            placeholder={"Enter your email"}
            dataRecurly="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errorLabel && (
            <p className="title11-regular-outfit error-message">
              {errorLabel[0]}
            </p>
          )}
          {isAppleDevice ? (
            <button
              class="apple-pay-button apple-pay-button-black"
              id="my-apple-pay-button"
            ></button>
          ) : (
            <div
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