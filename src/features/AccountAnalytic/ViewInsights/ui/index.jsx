import React from "react"
import "./viewInsights.scss"
import { AppButton, Icon } from "../../../../shared"
const ViewInsights = ({svgType, btnText, text}) => {
  return (
    <div className="view-insights-section">
      <div className="view-insights-block">
        <div className="view-insights-block-imgbg">
          <Icon
            type={svgType}
            alt="insightsIcon"
            strokeColor="#315DF4"
            width={24}
            height={24}
          ></Icon>
        </div>
        <p className="title24-semibold-urbanist view-insights-text">
          {text}
        </p>
        <AppButton
          text={btnText}
          typeIcon="arrow"
          altIcon="ArrowIcon"
          widthSize={24}
          heightSize={24}
        />
      </div>
    </div>
  )
}

export default ViewInsights
