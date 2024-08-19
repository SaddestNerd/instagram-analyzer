import React from "react"
import "./news.scss"
import { NewsContainer } from "../../../widgets"

const News = () => {
  return (
    <div className="news-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <p className="text title24-medium-urbanist">
          Keep up to date with the{" "}
          <span className="blue title24-bold-urbanist">
            latest news in the field
          </span>{" "}
          of promotion of Instagram account
        </p>
        <NewsContainer />
      </div>
    </div>
  )
}

export default News
