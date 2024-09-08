import React from "react"
import "./accountUpperStatistic.scss"
import { StatisticBlock } from "../../../shared"
import Avatar from "../../../shared/ui/Avatar"


const AccountUpperStatistic = ({profile}) => {

  return (
    <div className="account-upper-statistic">
      <Avatar fullname={profile?.fullName ? profile?.fullName : profile?.username} nickname={profile?.username} img={profile?.pictureBase64}/>
      <div className="flex-statistics">
        <StatisticBlock svg={"Followers"} name={"Followers"} stat={profile?.followersCount} />
        <StatisticBlock svg={"Posts"} name={"Posts"} stat={profile?.postsCount} />
        <StatisticBlock svg={"Following"} name={"Following"} stat={profile?.followingCount} />
      </div>
    </div>
  )
}

export default AccountUpperStatistic
