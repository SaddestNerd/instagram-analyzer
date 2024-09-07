import React, { useEffect } from "react"
import "./likesAndComments.scss"
import { AnalyticBlock } from "../../../../shared"
import useInstagramData from "../../../../shared/lib/hooks/instagram/instagram.hook"
import GetInstagamData from "../../../../shared/lib/hooks/instagram/instagramSelector.hook"

const LikesAndComments = ({profileAnalysis}) => {

  return (
    <div className="like-comment-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        Likes & Comments
      </p>
      <div className="like-comment-block">
        <AnalyticBlock
          text={profileAnalysis?.totalLikes}
          title="Likes"
          className="analytic-block-iconbg"
          type="likes"
          width={24}
          height={24}
          alt="likesIcon"
          strokeColor="#315DF4"
        />
        <AnalyticBlock
          text={profileAnalysis?.totalComments}
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
