import React from "react"
import "../newsArticle.scss"
import { NewsArticleContainer } from "../../../../widgets"
import { Prev1 } from "../../../../shared/lib/icons/icons"

const NewsPage = () => {
  return (
    <div className="news-aricle-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <NewsArticleContainer
          src={Prev1}
          article={
            "Meta is enhancing Instagram with new AI tools aimed at boosting user creativity and simplifying photo and video editing. Currently in development, these tools reflect Meta’s dedication to innovation in social media..\n\nOne anticipated feature is an AI tool for Instagram's Story editor that can remove unwanted objects from photos. This feature will enable users to create cleaner, more professional-looking stories without relying on external apps or manual editing. It is designed to work with both static and moving images while maintaining the original background and lighting..\n\nAdditionally, mobile developer Alessandro Paluzzi has revealed upcoming features for Instagram, including a Quiz game for Instagram Live, disappearing messages, event creation, and a new sharing option for Stories."
          }
          text={"Instagram Introduced New AI Tool to enhace User Experience"}
        />
      </div>
    </div>
  )
}

export default NewsPage
