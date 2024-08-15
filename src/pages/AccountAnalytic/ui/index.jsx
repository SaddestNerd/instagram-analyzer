import React from "react"
import "./analytics.scss"
import {
  LatestPosts,
  UserEngagement,
  LikesAndComments,
  MostLikedPost,
  Audience,
  ViewInsights,
  NextUpdate,
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
      <NextUpdate />
    </div>
  )
}

export default AnalyticsPage
