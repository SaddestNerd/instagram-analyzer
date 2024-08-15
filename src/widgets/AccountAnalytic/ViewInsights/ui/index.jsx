import React from "react"
import "./viewInsights.scss"
import { AppButton, Icon } from "../../../../shared"
const ViewInsights = () => {
  return (
    <div className="view-insights-section">
      <div className="view-insights-block">
        <div className="view-insights-block-imgbg">
          <Icon
            type="insights"
            alt="insightsIcon"
            strokeColor="#315DF4"
            width={24}
            height={24}
          ></Icon>
        </div>
        <p className="title24-semibold-urbanist view-insights-text">
          We have prepared for you a number of tips and insights to improve your
          profile
        </p>
        <AppButton
          text="View insights"
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
