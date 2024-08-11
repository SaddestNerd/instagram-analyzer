import React from "react"
import "./progressCircle.scss"
import Icon from "../Icons"

const CircleProgressBar = ({ progress }) => {
  return (
    <div className="progress-circle">
      <div className="icon-wrapper">
        <Icon
          type="instCircleLoad"
          width={200}
          height={200}
          alt="instCircleLoad"
        />
      </div>
      <svg className="circle-svg">
        <circle className="circle-background" cx="50%" cy="50%" r="45%" />
        <circle
          className="circle-progress"
          cx="50%"
          cy="50%"
          r="45%"
          style={{
            strokeDasharray: "625",
            strokeDashoffset: 625 - (625 * progress) / 100,
          }}
        />
      </svg>
    </div>
  )
}

export default CircleProgressBar
