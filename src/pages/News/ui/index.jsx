import React from "react"
import "./news.scss"
import { InfoBlocks, InfoBlocksV2, InfoBlocksV3, NewsContainer } from "../../../widgets"


const Insights = () => {
  return (
    <div className="news-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <p className="text title20-medium-urbanist">Keep up to date with the <span className="blue title20-bold-urbanist">latest news in the field</span> of promotion of Instagram account</p>
      
        <NewsContainer/>
      </div>
    </div>
  )
}

export default Insights;
