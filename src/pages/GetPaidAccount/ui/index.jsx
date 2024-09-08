import React, { useEffect, useState } from "react"
import "./getPaidAccount.scss"
import {
  CenterDescription,
  FooterInformation,
  TimerBlock,
  TimerHeaderBlock,
} from "../../../widgets"
import { PayWindow } from "../../../features"
import { useGetPaidAccount } from "../model/getPaidAccountTimer"
import usePaymentData from "../../../shared/lib/hooks/payment/payment.hook"
import GetPaymentData from "../../../shared/lib/hooks/payment/paymentSelector.hook"
import { useRecurly, useCheckoutPricing } from "@recurly/react-recurly"

const GetPaidAccountPage = () => {

  const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;
  const {
    activeModalWindow,
    setActiveModalWindow,
    showHeaderTimer,
    time,
    scrollToOffer,
    timerBlockRef,
  } = useGetPaidAccount()

  const [selectedPlan, setSelectedPlan] = useState('plan-code')

  const [{ price, loading: pricingLoading }, setCheckoutPricing] =
    useCheckoutPricing({
      subscriptions: [
        {
          plan: selectedPlan,
        },
      ],
    });


  if (pricingLoading) return <></>

 
  return (
    <div className={`get-paid-account`}>

      <div className="background-wrapper"></div>
      <div ref={timerBlockRef}>
        <TimerBlock
          onScrollToOffer={() => scrollToOffer.current()}
          time={time}
        />
      </div>
      <CenterDescription
        onActiveModal={() => setActiveModalWindow(true)}
        scrollToOffer={scrollToOffer}
        isAppleDevice={isAppleDevice}
        price={price}
      />
      <FooterInformation />
      <TimerHeaderBlock time={time} show={showHeaderTimer} />
      <div
        className={
          "upper-window-background" + (activeModalWindow ? " is-active" : " ")
        }
        onClick={() => setActiveModalWindow(false)}

      >
        <PayWindow price={price} isAppleDevice={isAppleDevice} svg={isAppleDevice ? "apple" : "google"} />
      </div>
    </div>
  )
}

export default GetPaidAccountPage
