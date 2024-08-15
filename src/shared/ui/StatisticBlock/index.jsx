import React from "react"
import "./statisticBlock.scss"
import { Followers, Following, Posts } from "../../lib/icons/icons"

const StatisticBlock = ({ svg, name, stat }) => {
  return (
    <div className="avatar-wrapper-block">
      <div className="img-wrapper">
        {svg === "Followers" ? <Followers /> : <></>}
        {svg === "Posts" ? <Posts /> : <></>}
        {svg === "Following" ? <Following /> : <></>}
      </div>

      <p className="title14-regular-urbanist">{name}</p>
      <p className="title16-semibold-urbanist">{stat}</p>
    </div>
  )
}

export default StatisticBlock
