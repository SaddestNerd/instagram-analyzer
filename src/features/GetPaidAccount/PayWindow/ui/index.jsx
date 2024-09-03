import React from "react"
import "./payWindow.scss"
import { DefaultButton, DefaultInput } from "../../../../shared"
import { ApplePayBig, GooglePayBig } from "../../../../shared/lib/icons/icons"
import { useRef, useEffect, useState} from "react"
import { useRecurly } from "@recurly/react-recurly"
import usePaymentData from "../../../../shared/lib/hooks/payment/payment.hook"


const PayWindow = ({ svg, isAppleDevice }) => {
  const googlePayButtonRef = useRef(null)
  const [amount, setAmount] = useState(228)
  const [loading, setLoading] = useState(false)
  const recurly = useRecurly()
  const { currency, subscribeGooglePay, subscribeApplePay } = usePaymentData();

  const [email, setEmail] = useState("")
  const emailRef = useRef(email)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    emailRef.current = e.target.value 
  }


  useEffect(() => {
    if (!loading) {
      if(isAppleDevice){
        const applePay = recurly.ApplePay({
          country: "US",
          currency: "USD",
          label: "My Subscription",
          total: '29.00',
          callbacks: {
            onPaymentAuthorized: async (paymentData) => {
              const { recurlyToken: token } = paymentData

              await subscribeApplePay({paymentData, email: emailRef.current, tokenId: token.id})
            },
          },
        })
        
        applePay.ready(() => {
          const applePayButton = document.getElementById("my-apple-pay-button")
          if (applePayButton) {
            applePayButton.addEventListener("click", () => {
              try {
                applePay.begin();
              } catch (error) {
                alert(applePayButton)
              }
            })
          }
        })
  
        applePay.on("error", (err) => {
          console.error("Apple Pay error", err)
        })
  
        return () => {
          applePay.off("error")
        }
      }
      // else{
      //   const googlePay = recurly.GooglePay({
      //     currency: "USD",
      //     country: "US",
      //     total: amount.toString(),
      //     googleMerchantId: "5427781066",
      //     billingAddressRequired: true,
      //     callbacks: {
      //       onPaymentAuthorized: async (paymentData) => {
      //         const { recurlyToken: token } = paymentData
      //         console.log(paymentData)
      //         await subscribeGooglePay({paymentData, email: emailRef.current, tokenId: token.id})
      //       },
      //     },
      //   })
      //   googlePay.on("ready", (googlePayButton) => {
      //     const container = document.getElementById("google-pay-button-container")
      //     if (googlePayButtonRef.current) {
      //       googlePayButtonRef.current.remove()
      //     }
      //     if (container) {
      //       container.appendChild(googlePayButton)
      //       googlePayButtonRef.current = googlePayButton
      //     }
      //   })
  
      //   googlePay.on("error", (err) => {
      //     console.error("Google Pay error", err)
      //   })
  
      //   return () => {
      //     googlePay.off("ready")
      //     googlePay.off("error")
      //     if (googlePayButtonRef.current) {
      //       googlePayButtonRef.current.remove()
      //     }
      //   }
      // }

    }
  }, [amount, currency, loading])

  return (
    <div className="pay-window"  onClick={(e) => e.stopPropagation()}>
      {svg === "apple" ? <ApplePayBig /> : <GooglePayBig />}
      <p className="title16-regular-outfit">
        Enter your e-mail to get an invoice
      </p>
      <div className="pay-window-block">
        <DefaultInput text={"Email"} 
              placeholder={"Enter your email"}
              dataRecurly="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              />
        {/* <DefaultButton text={"COMPLETE PAYMENT"} isDisabled={true} /> */}
        {isAppleDevice ?      <button class="apple-pay-button apple-pay-button-black" id="my-apple-pay-button"></button> :
             <div id="google-pay-button-container" className="google-pay-button-container"/>}
   
   
      </div>
    </div>
  )
}

export default PayWindow
