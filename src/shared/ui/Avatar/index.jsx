import React from "react"
import "./avatar.scss"


const Avatar = ({ img, fullname, nickname }) => {
  return (
    <div className="avatar-wrapper">
      <img  src={`data:image/jpeg;base64,${img}`}  alt="ProfileIcon" crossOrigin="anonymous" />
      <p className="title20-medium-urbanist">{fullname}</p>
      <p className="title14-regular-urbanist">{nickname}</p>
    </div>
  )
}

export default Avatar
