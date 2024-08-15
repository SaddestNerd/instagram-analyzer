import React from "react"
import "./insightBlock.scss"
import Icon from "../Icons"

const InsightBlock = ({
  bigText,
  littleText,
  typeIcon,
  color,
  strokeColor,
  iconText,
  altIcon,
  widthSize,
  heightSize,
}) => {
  return (
    <div className="insight-wrapper-block">
      <div className="icon-element">
        <span className="icon-wrapper">
          <Icon
            type={typeIcon}
            color={color}
            strokeColor={strokeColor}
            alt={altIcon}
            width={widthSize}
            height={heightSize}
          />
          {iconText ? (
            <p className="title12-medium-urbanist">{iconText}</p>
          ) : (
            <></>
          )}
        </span>
      </div>

      <p className="text-element title20-medium-urbanist">{bigText}</p>
      <p className="text-element title14-regular-urbanist">{littleText}</p>
    </div>
  )
}

export default InsightBlock
