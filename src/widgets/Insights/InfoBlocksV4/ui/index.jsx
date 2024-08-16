import React from "react"
import "./infoBlocks.scss"
import { InsightBlock } from "../../../../shared"

const InfoBlocksV2 = ({ text }) => {
  return (
    <div className="info-blocks-v2">
      <p className="title24-bold-urbanist">{text}</p>
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        iconText="1st recommendation"
        bigText={"Test Different Content Types"}
        littleText={
          "Determine which content types perform best and produce more of them to boost overall engagement."
        }
      />
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        iconText="2st recommendation"
        bigText={"Improve Visuals"}
        littleText={
          "Invest in high-quality visuals and creative graphics to make your posts more attractive."
        }
      />
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        iconText="3st recommendation"
        bigText={"Utilize Optimal Posting Times"}
        littleText={
          "Identify when your audience is most active and schedule your posts during these peak times to maximize visibility."
        }
      />
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        iconText="4st recommendation"
        bigText={"Integrate User Feedback"}
        littleText={
          "Use audience feedback and comments to adjust your content strategy according to their preferences. "
        }
      />
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        iconText="5st recommendation"
        bigText={"Highlight User-Generated Content"}
        littleText={
          "Encourage followers to share content related to your brand and showcase it on your profile. "
        }
      />
            <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        iconText="6th recommendation"
        bigText={"Use Story Highlights"}
        littleText={
          "Organize and feature key content by creating Highlights from your Stories, keeping it readily accessible on your profile."
        }
      />
            <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        iconText="7th recommendation"
        bigText={"Launch Engagement Campaigns"}
        littleText={
          "Organize campaigns that drive interaction, such as contests, challenges, or interactive Q&A sessions."
        }
      />
    </div>
  )
}

export default InfoBlocksV2
