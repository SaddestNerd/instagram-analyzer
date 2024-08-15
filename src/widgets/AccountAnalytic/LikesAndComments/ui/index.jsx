import React from "react"
import "./likesAndComments.scss"
import { AnalyticBlock } from "../../../../shared"

const LikesAndComments = () => {
  return (
    <div className="like-comment-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        Likes & Comments
      </p>
      <div className="like-comment-block">
        <AnalyticBlock
          text="132.17"
          title="Avg. Likes/Post"
          className="analytic-block-iconbg"
          type="likes"
          width={24}
          height={24}
          alt="likesIcon"
          strokeColor="#315DF4"
        />
        <AnalyticBlock
          text="30"
          title="Comments"
          className="analytic-block-iconbg"
          type="comments"
          width={24}
          height={24}
          alt="commentsIcon"
          strokeColor="#315DF4"
        />
      </div>
    </div>
  )
}

export default LikesAndComments
