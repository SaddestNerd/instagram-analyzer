import React from "react"
import "./progressBar.scss"

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgressBar
