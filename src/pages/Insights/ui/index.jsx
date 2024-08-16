import React from "react"
import "./insights.scss"
import { InfoBlocks, InfoBlocksV2, InfoBlocksV3, InfoBlocksV4 } from "../../../widgets"
import { ViewInsights } from "../../../features"

const InsightsPage = () => {
  return (
    <div className="insights-page">
      <div className="upper-gradient"></div>
      <div className="content-wrapper">
        <p className="text title24-medium-urbanist">
          We have prepared some tips to help{" "}
          <span className="blue title24-bold-urbanist">
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
          <div className="color-blue-background">
            <div className="white-background">
              <InfoBlocksV2 text={"Recommendation for Increasing Followers"} />
            </div>
          </div>
          <div className="gradient-background">
            <InfoBlocksV3 text={"Insights"} />
          </div>
          <div className="color-purple-background">
            <div className="white-background">
              <InfoBlocksV4
                text={
                  "To summarize the points discussed, here are some fundamental recommendations:"
                }
              />
              <ViewInsights
                typeIcon="news"
                altIcon="NewsIcon"
                btnText="Read news"
                text="Keep up to date with the latest news in the field of promotion of Instagram account and learn new things"
                link="/news"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightsPage
