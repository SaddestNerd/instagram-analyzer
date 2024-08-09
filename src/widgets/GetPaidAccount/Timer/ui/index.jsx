import React from "react"
import "./timer.scss"

const Timer = () => {
  return (
    <div className="flex-timer">
      <div className="timer-element-wrapper">
        <div className="timer-element hours title40-semibold-outfit">00</div>
        <p className="title16-regular-outfit">Hours</p>
      </div>
      <div className="double-dots title40-semibold-outfit">:</div>
      <div className="timer-element-wrapper">
        <div className="timer-element min title40-semibold-outfit">14</div>
        <p className="title16-regular-outfit">Minutes</p>
      </div>
      <div className="double-dots title40-semibold-outfit">:</div>
      <div className="timer-element-wrapper">
        <div className="timer-element sec title40-semibold-outfit">59</div>
        <p className="title16-regular-outfit">Seconds</p>
      </div>
    </div>
  )
}

export default Timer
