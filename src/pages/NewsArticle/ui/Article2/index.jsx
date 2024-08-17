import React from "react"
import "../newsArticle.scss"
import { NewsArticleContainer } from "../../../../widgets"
import { Prev2 } from "../../../../shared/lib/icons/icons"

const NewsPage = () => {
  return (
    <div className="news-aricle-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <NewsArticleContainer
          src={Prev2}
          text={"Instagram Introduces New Features for Direct Messaging"}
          article={
            "Instagram has unveiled new features for Direct Messaging, including enhanced group chat options and updated emoji reactions. These improvements are aimed at making conversations more interactive and personalized. Users can now enjoy a more seamless messaging experience with added customization.\n\nThe update introduces features such as message replies, mentions in group chats, and new reaction emojis. These enhancements are designed to facilitate more engaging and meaningful interactions within the messaging platform.\n\nInstagram’s focus on improving Direct Messaging reflects its commitment to enhancing user communication. These new features are now available and are expected to enrich the overall user experience."
          }
        />
      </div>
    </div>
  )
}

export default NewsPage
