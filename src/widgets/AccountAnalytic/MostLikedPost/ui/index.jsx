import React, { useEffect } from "react"
import "./mostLikedPost.scss"
import { MostLikedPostBlock } from "../../../../shared"
import useInstagramData from "../../../../shared/lib/hooks/instagram/instagram.hook"
import GetInstagamData from "../../../../shared/lib/hooks/instagram/instagramSelector.hook"
import { format } from "date-fns"

const MostLikedPost = () => {
  const { dispatchInstagramAnalysisAccount } = useInstagramData()
  const { loading, profileAnalysis } = GetInstagamData()

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatchInstagramAnalysisAccount()
      } catch (error) {
        console.error("Error:", error)
      }
    }
    fetchData()
  }, [])
  if (loading) return <></>
  const top3Posts = profileAnalysis?.top3Posts || []
  return (
    <div className="most-liked-section">
      <p className="title20-bold-urbanist analytic-widget-title-color">
        Most Liked Posts
      </p>
      <div className="most-liked-block">
        {top3Posts.map((post, index) => (
          <MostLikedPostBlock
            key={index}
            title={format(new Date(post.date), "MMMM d, yyyy")}
            className="most-liked-post-block-iconbg"
            type="likes"
            width={24}
            height={24}
            alt="likesIcon" 
            strokeColor="#315DF4"
            text={post.likesCount.toString()}
            imageURL={post.pictureURL}
          />
        ))}
      </div>
    </div>
  )
}

export default MostLikedPost
