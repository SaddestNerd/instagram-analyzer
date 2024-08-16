import React from "react"
import "../newsArticle.scss"
import { NewsArticleContainer } from "../../../../widgets"
import { Prev3 } from "../../../../shared/lib/icons/icons"


const NewsPage = () => {
  return (
    <div className="news-aricle-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <NewsArticleContainer src={Prev3} text={"New Instagram Analytics Tools for Business Accounts"} article={"Instagram has rolled out upgraded analytics tools for business accounts, offering more detailed insights into engagement and performance. The new tools provide metrics on follower demographics, post reach, and content effectiveness.\n\nThese enhancements are aimed at helping businesses and influencers make data-driven decisions to improve their social media strategies. The detailed analytics are crucial for refining content and increasing visibility.\n\nThe update represents Instagram's commitment to supporting businesses with valuable data to optimize their presence on the platform."} />
      </div>
    </div>
  )
}

export default NewsPage
