import React from "react"
import "./infoBlocks.scss"
import { InsightBlock } from "../../../../shared"

const InfoBlocks = ({ text }) => {
  return (
    <div className="info-blocks">
      <p className="title24-medium-urbanist">{text}</p>
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Post More Frequently"}
        littleText={
          "Write captions that encourage your followers to comment, share their thoughts, or tag friends. "
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Post More Frequently"}
        littleText={
          "Write captions that encourage your followers to comment, share their thoughts, or tag friends. "
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Post More Frequently"}
        littleText={
          "Write captions that encourage your followers to comment, share their thoughts, or tag friends. "
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Post More Frequently"}
        littleText={
          "Write captions that encourage your followers to comment, share their thoughts, or tag friends. "
        }
      />
    </div>
  )
}

export default InfoBlocks
