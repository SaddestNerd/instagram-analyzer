import React, { useEffect } from "react"
import "./userEngagement.scss"
import { OverallRate, AnalyticBlock } from "../../../../shared"
import useInstagramData from "../../../../shared/lib/hooks/instagram/instagram.hook"
import GetInstagamData from "../../../../shared/lib/hooks/instagram/instagramSelector.hook"

const UserEngagement = () => {
  const { dispatchInstagramAnalysisAccount } = useInstagramData()
  const { loading, profileAnalysis } = GetInstagamData()

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
  if (loading) return <></>

  return (
    <div className="user-engagement-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        User Engagement
      </p>
      <div className="user-engagement-block">
        <OverallRate />
        <AnalyticBlock
          text={profileAnalysis?.avgLikes}
          title="Avg. Likes/Post"
        />
        <AnalyticBlock
          text={profileAnalysis?.avgComments}
          title="Avg. Comments/Post"
        />
      </div>
    </div>
  )
}

export default UserEngagement
