import React from "react"
import "./newsArticle.scss"
import { NewsArticleContainer } from "../../../widgets"
import { TestNews } from "../../../shared/lib/icons/icons"

const NewsPage = () => {
  return (
    <div className="news-aricle-page">
            <div className="upper-gradient"></div>
            <div className="content-wrapper">
        <NewsArticleContainer src={TestNews}/>
      </div>
    </div>
  )
}

export default NewsPage
