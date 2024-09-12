import React, { useEffect, useState } from "react";
import "./getPaidAccount.scss";
import {
  CenterDescription,
  FooterInformation,
  TimerBlock,
  TimerHeaderBlock,
} from "../../../widgets";
import { PayWindow } from "../../../features";
import { useGetPaidAccount } from "../model/getPaidAccountTimer";
import usePaymentData from "../../../shared/lib/hooks/payment/payment.hook";
import GetPaymentData from "../../../shared/lib/hooks/payment/paymentSelector.hook";
import { useRecurly, useCheckoutPricing } from "@recurly/react-recurly";
import { Loader } from "../../../shared";

const GetPaidAccountPage = () => {
  const [isLoaded, setIsLoaded] = useState(false); // New state to manage the delay
  const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;

  const {
    activeModalWindow,
    setActiveModalWindow,
    showHeaderTimer,
    time,
    scrollToOffer,
    timerBlockRef,
  } = useGetPaidAccount();

  const {
    dispatchPlan,
    dispatchCurrency,
  } = usePaymentData();

  const { currency, plan } = GetPaymentData();

  const [selectedCurrency, setSelectedCurrency] = useState(process.env.REACT_APP_DEFAULT_CURRENCY);
  const [selectedPlan, setSelectedPlan] = useState(process.env.REACT_APP_DEFAULT_PLAN);

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
  }, [plan, currency]);

  const [{ price, loading: pricingLoading }, setCheckoutPricing] =
    useCheckoutPricing({
      subscriptions: [
        {
          plan: selectedPlan,
        },
      ],
      currency: selectedCurrency,
    });

  // Adding 1 second loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded || pricingLoading) return  <div className="account-creating-wrapper"><div className="create-acc-section"><Loader/></div></div>


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
