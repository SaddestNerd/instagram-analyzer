import React from "react"

import "./newsBlock.scss"
import { Link } from "react-router-dom"

const NewsBlock = ({ text, img, link }) => {

  
  return (
    <Link       
      to={link}> 
      <div className="news-block">
        <img src={img} alt="" />
        <p className="title16-bold-urbanist">{text}</p>
      </div>
    </Link>
  )
}

export default NewsBlock
