import React from "react"
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
      />
      <FooterInformation />
      <TimerHeaderBlock time={time} show={showHeaderTimer} />
      <div
        className={
          "upper-window-background" + (activeModalWindow ? " is-active" : " ")
        }
        onClick={() => setActiveModalWindow(false)}
      >
        <PayWindow svg={"apple"} />
      </div>
    </div>
  )
}

export default GetPaidAccountPage
