import React from "react"
import Icon from "../Icons"
import "./analyticBlock.scss"

const AnalyticBlock = ({
  title,
  text,
  type,
  width,
  height,
  alt,
  color,
  strokeColor,
  className,
  classNameClock,
}) => {
  const roundedText = text ? Math.round(Number(text)) : text
  return (
    <div className="analytic-block-component">
      <div className={className}>
        <Icon
          type={type}
          width={width}
          height={height}
          alt={alt}
          color={color}
          strokeColor={strokeColor}
        />
      </div>
      <p className="title12-regular-urbanist">{title}</p>
      {text ? (
        <p className="title24-medium-urbanist">{roundedText}</p>
      ) : (
        <div className={classNameClock}>
          <Icon
            type="updateClock"
            width={24}
            height={24}
            alt="ClockIcon"
            strokeColor="#B7B3BE"
          />
        </div>
      )}
    </div>
  )
}

export default AnalyticBlock
