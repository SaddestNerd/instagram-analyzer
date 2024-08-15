import React from "react"

import "./newsBlock.scss"


const NewsBlock = ({text, img}) => {


  return (
    <div className="news-block">
      <img src={img} alt="" />
      <div className="title16-bold-urbanist">{text}</div>
    </div>
  )
}

export default NewsBlock
