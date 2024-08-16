import React from "react"
import "../newsArticle.scss"
import { NewsArticleContainer } from "../../../../widgets"
import { Prev4 } from "../../../../shared/lib/icons/icons"


const NewsPage = () => {
  return (
    <div className="news-aricle-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <NewsArticleContainer src={Prev4} text={"Instagram Launches Collaborative Posts for Wider Reach"} article={"Instagram has introduced a new collaborative posts feature, allowing users to co-create and share posts with other accounts. This feature lets joint posts appear on both collaborators’ profiles, broadening the potential audience.\n\nThis update is designed to facilitate partnerships between influencers, brands, and content creators. By leveraging each other’s follower base, users can enhance engagement and reach new audiences.\n\nCollaborative posts provide a fresh way to create and share content, encouraging creative collaborations within the Instagram community."}  />
      </div>
    </div>
  )
}

export default NewsPage
