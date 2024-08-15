import React from "react"
import "./infoBlocks.scss"
import { Icon, InsightBlock } from "../../../../shared"



const InfoBlocks = ({ text, onClick }) => {
  return (
    <div className="info-blocks">
        
        <div className="title20-bold-urbanist">{text}</div>
        <InsightBlock svgType="recommendation"  bigText={"Post More Frequently"} littleText={"Write captions that encourage your followers to comment, share their thoughts, or tag friends. "}/>
        <InsightBlock svgType="recommendation" bigText={"Post More Frequently"} littleText={"Write captions that encourage your followers to comment, share their thoughts, or tag friends. "}/>
        <InsightBlock svgType="recommendation"  bigText={"Post More Frequently"} littleText={"Write captions that encourage your followers to comment, share their thoughts, or tag friends. "}/>
        <InsightBlock svgType="recommendation"  bigText={"Post More Frequently"} littleText={"Write captions that encourage your followers to comment, share their thoughts, or tag friends. "}/>
    </div>
  )
}

export default InfoBlocks
