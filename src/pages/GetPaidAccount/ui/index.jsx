import React, { useState, useRef } from "react";
import "./getPaidAccount.scss"
import {
  CenterDescription,
  FooterInformation,
  TimerBlock,
} from "../../../widgets"
import { PayWindow } from "../../../features"

const GetPaidAccountPage = () => {
  const [activeMobalWindow, setActiveModalWindow] = useState(true)
  const scrollToOffer = useRef(null);

  return (
    <div className={`get-paid-account`}>
      <div className="background-wrapper"></div>
      <TimerBlock onScrollToOffer={() => scrollToOffer.current()}/>
      <CenterDescription onActiveModal={() => setActiveModalWindow(true)} scrollToOffer={scrollToOffer} />
      <FooterInformation />
      <div
        className={
          "upper-window-background" + (activeMobalWindow ? " is-active" : " ")
        }
        onClick={() => setActiveModalWindow(false)}
      >
        <PayWindow svg={"apple"} />
      </div>
    </div>
  )
}

export default GetPaidAccountPage
