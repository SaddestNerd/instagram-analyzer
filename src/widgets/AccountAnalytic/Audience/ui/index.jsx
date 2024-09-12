import React from "react"
import "./audience.scss"
import { AnalyticBlock } from "../../../../shared"

const Audience = ({profileAnalysis}) => {
  return (
    <div className="audience-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        Audiene
      </p>
      <div className="audience-block">
        <AnalyticBlock
          text={profileAnalysis?.lostFollowers ? profileAnalysis?.lostFollowers : "0"}
          title="Lost Followers"
          className="analytic-block-iconbg"
          type="lostFollowers"
          width={24}
          height={24}
          alt="lostFollowersIcon"
          strokeColor="#315DF4"
          classNameClock="analytic-block-iconClockbg"
        />
        <AnalyticBlock
          text={ profileAnalysis?.newFollowers ? profileAnalysis?.newFollowers: "0"}
          title="New Followers"
          className="analytic-block-iconbg"
          type="newFollowers"
          width={24}
          height={24}
          alt="newFollowersIcon"
          strokeColor="#315DF4"
          classNameClock="analytic-block-iconClockbg"
        />
        <AnalyticBlock
          title="Secret Fans"
          className="analytic-block-iconbg"
          type="secretFans"
          width={24}
          height={24}
          alt="secretFansIcon"
          strokeColor="#315DF4"
        />
        <AnalyticBlock
          title="Inactive Followers"
          className="analytic-block-iconbg"
          type="inactiveFollowers"
          width={24}
          height={24}
          alt="inactiveFollowersIcon"
          strokeColor="#315DF4"
        />
        <AnalyticBlock
          title="Your Friends"
          className="analytic-block-iconbg"
          type="yourFriends"
          width={24}
          height={24}
          alt="yourFriendsIcon"
          strokeColor="#315DF4"
        />
        <AnalyticBlock
          title="Your Fans"
          className="analytic-block-iconbg"
          type="yourFans"
          width={24}
          height={24}
          alt="yourFansIcon"
          strokeColor="#315DF4"
        />
      </div>
    </div>
  )
}

export default Audience
