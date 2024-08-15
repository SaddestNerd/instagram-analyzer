import React from "react"
import "./infoBlocks.scss"
import { InsightBlock } from "../../../../shared"

const InfoBlocksV2 = ({ text }) => {
  return (
    <div className="info-blocks-v2">
      <p className="title24-medium-urbanist">{text}</p>
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        bigText={"Low Engagement Rate"}
        littleText={
          "The average likes per post are relativity low, indicating a need to improve engagement strategies. "
        }
      />
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        bigText={"Low Engagement Rate"}
        littleText={
          "The average likes per post are relativity low, indicating a need to improve engagement strategies.  "
        }
      />
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        bigText={"Low Engagement Rate"}
        littleText={
          "The average likes per post are relativity low, indicating a need to improve engagement strategies. "
        }
      />
      <InsightBlock
        typeIcon="insights"
        altIcon="InsightsIcon"
        strokeColor="#FFFFFF"
        widthSize={16}
        heightSize={16}
        bigText={"Low Engagement Rate"}
        littleText={
          "The average likes per post are relativity low, indicating a need to improve engagement strategies. "
        }
      />
    </div>
  )
}

export default InfoBlocksV2
