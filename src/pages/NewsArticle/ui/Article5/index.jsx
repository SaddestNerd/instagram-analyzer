import React from "react"
import "../newsArticle.scss"
import { NewsArticleContainer } from "../../../../widgets"
import { Prev5 } from "../../../../shared/lib/icons/icons"


const NewsPage = () => {
  return (
    <div className="news-aricle-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <NewsArticleContainer src={Prev5} text={"Instagram Expands 'Add Yours' Sticker to All Users"} article={"Instagram has rolled out its 'Add Yours' sticker to all users, allowing them to participate in interactive story trends. The sticker enables users to respond to prompts and share their own content related to specific themes or challenges. This feature aims to increase user engagement and foster community interaction.\n\nThe 'Add Yours' sticker encourages creativity and participation, making it easier for users to join trending topics and challenges. This update is designed to enhance the storytelling capabilities of Instagram Stories and boost user involvement on the platform.\n\nBy making the 'Add Yours' sticker widely available, Instagram is promoting more interactive and engaging content. The feature is expected to contribute to higher engagement rates and more dynamic story experiences for users."} />
      </div>
    </div>
  )
}

export default NewsPage
