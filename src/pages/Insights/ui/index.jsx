import React from "react"
import "./insights.scss"
import { InfoBlocks, InfoBlocksV2, InfoBlocksV3 } from "../../../widgets"
import { ViewInsights } from "../../../features"

const InsightsPage = () => {
  return (
    <div className="insights-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <p className="text title20-medium-urbanist">
          We have prepared some tips to help{" "}
          <span className="blue title20-bold-urbanist">
            improve the performance
          </span>{" "}
          of your Instagram account.
        </p>
        <div className="blocks-wrapper">
          <div className="color-blue-background">
            <div className="white-background">
              <InfoBlocks text={"Recommendation for Increasing Engagement"} />
            </div>
          </div>
          <div className="gradient-background">
            <InfoBlocksV2 text={"Insights"} />
          </div>
          <div className="color-purple-background">
            <div className="white-background">
              <InfoBlocksV3
                text={
                  "To summarize all of above, we can formulate the following basic recommendations:"
                }
              />
               <ViewInsights svgType={"news"} btnText={"View insights"} text={"Keep up to date with the latest news in the field of promotion of Instagram account and learn new things"}/>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightsPage
