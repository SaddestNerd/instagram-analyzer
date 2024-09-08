import React, { useEffect } from "react"
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
import GetInstagamData from "../../../shared/lib/hooks/instagram/instagramSelector.hook"
import useInstagramData from "../../../shared/lib/hooks/instagram/instagram.hook"
import { Loader } from "../../../shared"

const AccountAnalytic = () => {

  const { dispatchInstagramAnalysisAccount } = useInstagramData()
  const { loading, profileAnalysis, error } = GetInstagamData()

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatchInstagramAnalysisAccount()
      } catch (error) {
        console.error("Error:", error)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="account-information-page"><div className="upper-gradient"></div><Loader/></div>
  }

  
  if (error === "ThrottlerException: Too Many Requests") {
    return <div className="account-information-page"><div className="upper-gradient"></div>
    <div className="center-wrapper">
      <Loader/>
      <p className="title24-bold-urbanist">Server Error: Too many requests</p>
      <p className="title16-semibold-urbanist">Try reload page later</p>
    </div>
    </div>
  }

  console.log(profileAnalysis);

  return (
    <div className="analytics-wrapper">
      <div className="upper-gradient"></div>
      <div className="analytics-padding">
        <LatestPosts />
        <UserEngagement profileAnalysis={profileAnalysis}/>
        <LikesAndComments profileAnalysis={profileAnalysis}/>
        <MostLikedPost profileAnalysis={profileAnalysis}/>
        <Audience profileAnalysis={profileAnalysis} />
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
