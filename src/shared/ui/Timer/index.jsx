import React from "react"
import "./timer.scss"

const Timer = ({ time }) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0")
  const seconds = String(time % 60).padStart(2, "0")

  return (
    <div className="flex-timer">
      <div className="timer-element-wrapper">
        <div className="timer-element hours title40-semibold-outfit">00</div>
        <p className="title16-regular-outfit">Hours</p>
      </div>
      <div className="double-dots title40-semibold-outfit">:</div>
      <div className="timer-element-wrapper">
        <div className="timer-element min title40-semibold-outfit">
          {minutes}
        </div>
        <p className="title16-regular-outfit">Minutes</p>
      </div>
      <div className="double-dots title40-semibold-outfit">:</div>
      <div className="timer-element-wrapper">
        <div className="timer-element sec title40-semibold-outfit">
          {seconds}
        </div>
        <p className="title16-regular-outfit">Seconds</p>
      </div>
    </div>
  )
}

export default Timer
