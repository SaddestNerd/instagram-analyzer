import React from "react"
import Icon from "../Icons"
import "./mostLikedPostBlock.scss"
import MostLikedPost from "../../../shared/assets/main/MostLikedPost.webp"

const MostLikedPostBlock = ({
  title,
  text,
  type,
  width,
  height,
  alt,
  color,
  strokeColor,
  className,
}) => {
  return (
    <div className="most-liked-post-component">
      <div className="most-liked-post-img-container">
        <img
          className="liked-post-img-block"
          src={MostLikedPost}
          alt="MostLikedPostPng"
        ></img>
      </div>
      <div className="most-liked-post-details">
        <p className="title12-regular-urbanist">{title}</p>
        <div className="most-liked-post-likes">
          <div className={className}>
            <Icon
              type={type}
              width={width}
              height={height}
              alt={alt}
              color={color}
              strokeColor={strokeColor}
            ></Icon>
          </div>
          <p className="title24-medium-urbanist">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default MostLikedPostBlock
