import React from "react"
import "./accountUpperStatistic.scss"
import { StatisticBlock } from "../../../../shared"
import Avatar from "../../../../shared/ui/Avatar"

const AccountUpperStatistic = () => {
  return (
    <div className="account-upper-statistic">
      <Avatar fullname={"Carla Torff"} nickname={"@carlatorff"} />
      <div className="flex-statistics">
        <StatisticBlock svg={"Followers"} name={"Followers"} stat={"101"} />
        <StatisticBlock svg={"Posts"} name={"Posts"} stat={"7,723"} />
        <StatisticBlock svg={"Following"} name={"Following"} stat={"163,834"} />
      </div>
    </div>
  )
}

export default AccountUpperStatistic
