import React, { useState } from "react"
import Icon from "../Icons"
import "./mostLikedPostBlock.scss"
import defaultIMG from "../../../shared/assets/main/defaultIMG.jpg"

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
  imageURL,
}) => {
  const [imgSrc, setImgSrc] = useState(imageURL || defaultIMG)
  const handleError = () => {
    setImgSrc(defaultIMG)
  }
  return (
    <div className="most-liked-post-component">
      <div className="most-liked-post-img-container">
        <img
          className="liked-post-img-block"
          src={`data:image/jpeg;base64,${imgSrc}`}
          alt={"TopPost"}
          crossOrigin="anonymous"
          onError={handleError}
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
