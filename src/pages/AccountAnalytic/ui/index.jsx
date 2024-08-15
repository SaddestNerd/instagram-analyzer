import React from "react"
import "./analytics.scss"
import {
  LatestPosts,
  UserEngagement,
  LikesAndComments,
  MostLikedPost,
  Audience,
  ViewInsights,
} from "../../../widgets"

const AnalyticsPage = () => {
  return (
    <div className="analytics-wrapper">
      <div className="upper-gradient"></div>
      <div className="analytics-padding">
        <LatestPosts />
        <UserEngagement />
        <LikesAndComments />
        <MostLikedPost />
        <Audience />
        <ViewInsights />
      </div>
    </div>
  )
}

export default AnalyticsPage
