import React from "react"
import "./searching.scss"
import { ProgressBar } from "../../../../shared"

const Searching = ({ progress }) => {
  return (
    <div className="searching-section">
      <p className="procent-title">
        {progress}
        <span>%</span>
      </p>
      <p className="title16-regular-outfit searching-margin">
        Searching for secret admires
      </p>
      <ProgressBar progress={progress} />
    </div>
  )
}

export default Searching
