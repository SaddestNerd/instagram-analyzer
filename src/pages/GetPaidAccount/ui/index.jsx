import React, { useEffect, useRef, useState } from "react"
import "./getPaidAccount.scss"
import {
  CenterDescription,
  FooterInformation,
  TimerBlock,
  TimerHeaderBlock,
} from "../../../widgets"
import { PayWindow } from "../../../features"
import { useGetPaidAccount } from "../model/getPaidAccountTimer"

const GetPaidAccountPage = () => {
  const {
    activeModalWindow,
    setActiveModalWindow,
    showHeaderTimer,
    time,
    scrollToOffer,
    timerBlockRef,
  } = useGetPaidAccount()

  const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;

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
      />
      <FooterInformation />
      <TimerHeaderBlock time={time} show={showHeaderTimer} />
      <div
        className={
          "upper-window-background" + (activeModalWindow ? " is-active" : " ")
        }
        onClick={() => setActiveModalWindow(false)}
  
      >
        <PayWindow isAppleDevice={isAppleDevice} svg={isAppleDevice ? "apple" : "google"} />
      </div>
    </div>
  )
}

export default GetPaidAccountPage
