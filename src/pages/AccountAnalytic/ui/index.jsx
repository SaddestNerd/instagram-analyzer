import React from "react"
import "./accountAnalytic.scss"
import {
  LatestPosts,
  UserEngagement,
  LikesAndComments,
  MostLikedPost,
  Audience,
  NextUpdate,
} from "../../../widgets"
import { ViewInsights } from "../../../features"

const AccountAnalytic = () => {
  return (
    <div className="analytics-wrapper">
      <div className="upper-gradient"></div>
      <div className="analytics-padding">
        <LatestPosts />
        <UserEngagement />
        <LikesAndComments />
        <MostLikedPost />
        <Audience />
        <ViewInsights
          typeIcon="insights"
          altIcon="InsightsIcon"
          btnText="View insights"
          text="We have prepared for you a number of tips and insights to improve your profile"
          link="/insights"
        />
      </div>
      <NextUpdate />
    </div>
  )
}

export default AccountAnalytic
