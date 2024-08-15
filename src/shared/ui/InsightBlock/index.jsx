import React from "react"
import "./insightBlock.scss"
import Icon from "../Icons"



const InsightBlock = ({ bigText, littleText,  svgType, color, colorPath, iconText }) => {
  return (
    <div className="insight-wrapper-block">
      <div className="icon-element">
        <span className="icon-wrapper">
          <Icon type={svgType} color={color} strokeColor={colorPath} />
          {iconText ? <div className="title12-medium-urbanist">{iconText}</div> : <></>}
        </span>

      </div>

      <div className="text-element title20-medium-urbanist">{bigText}</div>
      <div className="text-element title14-regular-urbanist">{littleText}</div>
    </div>
  )
}

export default InsightBlock
