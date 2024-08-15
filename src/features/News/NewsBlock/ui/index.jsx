import React from "react"

import "./newsBlock.scss"

const NewsBlock = ({ text, img }) => {
  return (
    <div className="news-block">
      <img src={img} alt="" />
      <p className="title16-bold-urbanist">{text}</p>
    </div>
  )
}

export default NewsBlock
