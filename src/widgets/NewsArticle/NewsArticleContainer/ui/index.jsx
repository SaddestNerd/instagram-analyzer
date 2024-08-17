import React from "react"
import "./newsContainer.scss"

const NewsArticle = ({ src, text, article }) => {
  return (
    <div className="news-article-block">
      <img src={src} alt="NewsImg" />
      <p className="title20-bold-urbanist">{text}</p>
      <p
        style={{ whiteSpace: "pre-line" }}
        className="title14-regular-urbanist"
      >
        {article}
      </p>
    </div>
  )
}

export default NewsArticle
