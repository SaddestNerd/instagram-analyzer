import React from "react"
import "./infoBlocks.scss"
import { Icon, InsightBlock } from "../../../../shared"



const InfoBlocks = ({ text, onClick }) => {
  return (
    <div className="info-blocks">
        
        <div className="title20-bold-urbanist">{text}</div>
        <InsightBlock iconText="1st recommendation" svgType="crookedArrow" color="#ffffff" bigText={"Experiment with Content Types"} littleText={"Identify the types of content that perform best and create more of it to increase overall engagement. "}/>
        <InsightBlock iconText="2st recommendation" svgType="crookedArrow" color="#ffffff" bigText={"Experiment with Content Types"} littleText={"Identify the types of content that perform best and create more of it to increase overall engagement."}/>
        <InsightBlock iconText="3st recommendation" svgType="crookedArrow" color="#ffffff" bigText={"Experiment with Content Types"} littleText={"Identify the types of content that perform best and create more of it to increase overall engagement."}/>
        <InsightBlock iconText="4st recommendation" svgType="crookedArrow" color="#ffffff" bigText={"Experiment with Content Types"} littleText={"Identify the types of content that perform best and create more of it to increase overall engagement."}/>
    </div>
  )
}

export default InfoBlocks
