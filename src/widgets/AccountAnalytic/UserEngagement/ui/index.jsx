import React from "react"
import "./userEngagement.scss"
import { OverallRate, AnalyticBlock } from "../../../../shared"

const UserEngagement = () => {
  return (
    <div className="user-engagement-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        User Engagement
      </p>
      <div className="user-engagement-block">
        <OverallRate />
        <AnalyticBlock text="132.17" title="Avg. Likes/Post" />
        <AnalyticBlock text="12.92" title="Avg. Comments/Post" />
      </div>
    </div>
  )
}

export default UserEngagement
