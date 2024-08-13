import React from "react"
import "./timerBlock.scss"
import { DefaultButton, Timer } from "../../../../shared"
import { Discount } from "../../../../shared/lib/icons/icons"


const TimerBlock = ({onScrollToOffer }) => {
  return (
    <div className="upper-wrapper">
      <div className="svg-wrapper">
        <Discount />
      </div>
      <p className="upper-big-text">Time limited sale</p>
      <p className="upper-little-text">Grab the deal before it’s too late!</p>
      <Timer />
      <div className="get-follow-button-block">
      <DefaultButton text="Get Follow Stats: Profile Analyzer" onClick={onScrollToOffer}/>
      </div>
    </div>
  )
}

export default TimerBlock
