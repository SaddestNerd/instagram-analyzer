import React from "react"
import "./timerHeaderBlock.scss"

const TimerHeaderBlock = ({ time, show }) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0")
  const seconds = String(time % 60).padStart(2, "0")

  return (
    <div className={`timer-header-section ${show ? "show" : ""}`}>
      <div className="timer-header-block">
        <div>
          <p className="title14-regular-outfit timer-header-text">
            Your personalized plan has been reserved for the next 15 minutes!
          </p>
        </div>
        <div className="">
          <p className="title18-semibold-outfit">
            00:{minutes}:{seconds}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TimerHeaderBlock
