import React from "react"
import "./newsArticle.scss"
import { NewsArticleContainer } from "../../../widgets"
import { useParams } from "react-router-dom"
import { newsData } from "../model/newsData"

const NewsArticle = () => {
  const { id } = useParams()
  const item = newsData[id]

  return (
    <div className="news-aricle-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <NewsArticleContainer
          src={item.src}
          article={item.article}
          text={item.text}
        />
      </div>
    </div>
  )
}

export default NewsArticle
