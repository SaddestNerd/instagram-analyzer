import React from "react"
import "./mostLikedPost.scss"
import { MostLikedPostBlock } from "../../../../shared"

const MostLikedPost = () => {
  return (
    <div className="most-liked-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        Most Liked Posts
      </p>
      <div className="most-liked-block">
        <MostLikedPostBlock
          title="September 8, 2023"
          className="most-liked-post-block-iconbg"
          type="likes"
          width={24}
          height={24}
          alt="likesIcon"
          strokeColor="#315DF4"
          text="198"
        />
        <MostLikedPostBlock
          title="September 8, 2023"
          className="most-liked-post-block-iconbg"
          type="likes"
          width={24}
          height={24}
          alt="likesIcon"
          strokeColor="#315DF4"
          text="198"
        />
        <MostLikedPostBlock
          title="September 8, 2023"
          className="most-liked-post-block-iconbg"
          type="likes"
          width={24}
          height={24}
          alt="likesIcon"
          strokeColor="#315DF4"
          text="198"
        />
      </div>
    </div>
  )
}

export default MostLikedPost
