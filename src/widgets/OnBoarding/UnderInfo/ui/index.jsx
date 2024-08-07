import React from "react"
import "./underInfo.scss"
import Icon from "../../../../shared/ui/Icons"
import { StartAction } from "../../../../features"
const OnBoadrdingUnder = () => {
  return (
    <div className="onboarding-startinfo-section">
      <div className="onboarding-startinfo-block">
        <Icon type="logo" alt="logo" width={80} height={80}></Icon>
        <p className="title30-semibold-outfit">FollowStats: Profile Analyzer</p>
        <p className="title16-regular-outfit">
          Check who has unfollowed you, who is interested in your profile, who
          visits your page, how interesting your friends' profiles are, and
          more!
        </p>
        <StartAction />
      </div>
    </div>
  )
}

export default OnBoadrdingUnder
