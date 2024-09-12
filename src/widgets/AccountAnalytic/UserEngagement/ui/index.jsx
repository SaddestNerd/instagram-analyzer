import React from "react"
import "./userEngagement.scss"
import { OverallRate, AnalyticBlock } from "../../../../shared"


const UserEngagement = ({profileAnalysis}) => {

  return (
    <div className="user-engagement-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        User Engagement
      </p>
      <div className="user-engagement-block">
        <OverallRate />
        <AnalyticBlock
          text={profileAnalysis?.avgLikes ? profileAnalysis?.avgLikes : "0"}
          title="Avg. Likes/Post"
        />
        <AnalyticBlock
          text={profileAnalysis?.avgComments ? profileAnalysis?.avgComments : "0"}
          title="Avg. Comments/Post"
        />
      </div>
    </div>
  )
}

export default UserEngagement
