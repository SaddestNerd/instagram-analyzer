import React from "react"
import "./infoBlocks.scss"
import { InsightBlock } from "../../../../shared"

const InfoBlocksV3 = ({ text }) => {
  return (
    <div className="info-blocks-v3">
      <p className="title24-medium-urbanist">{text}</p>
      <InsightBlock
        iconText="1st recommendation"
        typeIcon="crookedArrow"
        altIcon="CrookedArrowIcon"
        bigText={"Experiment with Content Types"}
        littleText={
          "Identify the types of content that perform best and create more of it to increase overall engagement. "
        }
      />
      <InsightBlock
        iconText="2st recommendation"
        typeIcon="crookedArrow"
        altIcon="CrookedArrowIcon"
        bigText={"Experiment with Content Types"}
        littleText={
          "Identify the types of content that perform best and create more of it to increase overall engagement."
        }
      />
      <InsightBlock
        iconText="3st recommendation"
        typeIcon="crookedArrow"
        altIcon="CrookedArrowIcon"
        bigText={"Experiment with Content Types"}
        littleText={
          "Identify the types of content that perform best and create more of it to increase overall engagement."
        }
      />
      <InsightBlock
        iconText="4st recommendation"
        typeIcon="crookedArrow"
        altIcon="CrookedArrowIcon"
        bigText={"Experiment with Content Types"}
        littleText={
          "Identify the types of content that perform best and create more of it to increase overall engagement."
        }
      />
    </div>
  )
}

export default InfoBlocksV3
