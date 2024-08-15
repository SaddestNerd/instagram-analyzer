import React from "react"
import "./infoBlocks.scss"
import { Icon, InsightBlock } from "../../../../shared"



const InfoBlocks = ({ text, onClick }) => {
  return (
    <div className="info-blocks">
        
        <div className="title20-bold-urbanist">{text}</div>
        <InsightBlock svgType="insights" color="#ffffff" colorPath="#ffffff"  bigText={"Low Engagement Rate"} littleText={"The average likes per post are relativity low, indicating a need to improve engagement strategies. "}/>
        <InsightBlock svgType="insights" color="#ffffff" colorPath="#ffffff" bigText={"Low Engagement Rate"} littleText={"The average likes per post are relativity low, indicating a need to improve engagement strategies.  "}/>
        <InsightBlock svgType="insights" color="#ffffff" colorPath="#ffffff" bigText={"Low Engagement Rate"} littleText={"The average likes per post are relativity low, indicating a need to improve engagement strategies. "}/>
        <InsightBlock svgType="insights" color="#ffffff" colorPath="#ffffff" bigText={"Low Engagement Rate"} littleText={"The average likes per post are relativity low, indicating a need to improve engagement strategies. "}/>
    </div>
  )
}

export default InfoBlocks
