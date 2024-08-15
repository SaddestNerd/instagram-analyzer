import React from "react"
import "./avatar.scss"
import { TestAvatar } from "../../lib/icons/icons"

const Avatar = ({ fullname, nickname }) => {
  return (
    <div className="avatar-wrapper">
      <img src={TestAvatar} alt="ProfileIcon" />
      <p className="title20-medium-urbanist">{fullname}</p>
      <p className="title14-regular-urbanist">{nickname}</p>
    </div>
  )
}

export default Avatar
