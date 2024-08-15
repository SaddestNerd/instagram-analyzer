import React from "react"
import "./overallRate.scss"
const OverallRate = () => {
  return (
    <div className="overall-rate-component">
      <p className="title12-regular-urbanist">Overall Engagement Rate</p>
      <p className="title40-medium-urbanist very-low">Very Low</p>
      <div className="overall-rate-calculated">
        <div className="overall-rate-calculated-item"></div>
        <div className="overall-rate-calculated-item"></div>
        <div className="overall-rate-calculated-item"></div>
        <div className="overall-rate-calculated-item"></div>
        <div className="overall-rate-calculated-item"></div>
      </div>
      <p className="title12-regular-urbanist">
        *calculated as total likes + comments divided be total posts
      </p>
    </div>
  )
}

export default OverallRate
