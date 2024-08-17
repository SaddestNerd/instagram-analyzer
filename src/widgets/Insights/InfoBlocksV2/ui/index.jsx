import React from "react"
import "./infoBlocks.scss"
import { InsightBlock } from "../../../../shared"

const InfoBlocks2 = ({ text }) => {
  return (
    <div className="info-blocks">
      <p className="title24-bold-urbanist">{text}</p>
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Optimize Your Profile"}
        littleText={
          "Make sure your profile includes a bio, profile picture, and contact information to attract new followers."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Add Relevant Hashtags"}
        littleText={
          "Add popular and niche-specific hashtags to your posts to enhance visibility and attract new followers."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Host Giveaways"}
        littleText={
          "Organize giveaways that ask participants to follow your account, like your posts, and tag friends to enter."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Promote Across Platforms"}
        littleText={
          "Advertise your Instagram account on other social media networks and your website to attract traffic and increase followers."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Connect with Your Target Audience"}
        littleText={
          "Like, comment on, and share content from users in your niche to boost your visibility and attract new followers."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Utilize User-Generated Content"}
        littleText={
          "Encourage your followers to create and share content about your brand, and feature it on your profile with proper credit."
        }
      />
    </div>
  )
}

export default InfoBlocks2
