import React, { useState } from "react"
import "./timerBlock.scss"
import { DefaultButton, Timer } from "../../../../shared"
import { Discount } from "../../../../shared/lib/icons/icons"


const CenterDescription = () => {



  return (
    <div className="upper-wrapper">
    <div className="svg-wrapper">
      <Discount />
    </div>
    <p className="upper-big-text">Time limited sale</p>
    <p className="upper-little-text">Grab the deal before it’s too late!</p>
    <Timer />
    <DefaultButton text={"Get Follow Stats: Profile Analyzer"} />
  </div>
  )
}

export default CenterDescription
