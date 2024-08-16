import React from "react"
import "./infoBlocks.scss"
import { InsightBlock } from "../../../../shared"

const InfoBlocksV3 = ({ text }) => {
  return (
    <div className="info-blocks-v3">
      <p className="title24-medium-urbanist">{text}</p>
      <InsightBlock

        typeIcon="lamp"
        altIcon="Lamp"
        bigText={"Low Engagement Rate"}
        littleText={
          "Average likes per post are relatively low, suggesting the need to improve engagement strategies"
        }
      />
      <InsightBlock
        typeIcon="lamp"
        altIcon="Lamp"
        bigText={"Regular Posting"}
        littleText={
          "You’ve maintained a consistent posting schedule, but adjusting your content may be necessary to boost engagement."
        }
      />
      <InsightBlock
        typeIcon="lamp"
        altIcon="Lamp"
        bigText={"Varied Content Performance"}
        littleText={
          "Certain posts perform better than others, indicating that specific types of content resonate more with your audience."
        }
      />
      <InsightBlock
        typeIcon="lamp"
        altIcon="Lamp"
        bigText={"Positive Audience Interaction"}
        littleText={
          "Comments show favorable interactions with your audience, which can be leveraged to boost engagement."
        }
      />
            <InsightBlock
        typeIcon="lamp"
        altIcon="Lamp"
        bigText={"Effective Use of Captions"}
        littleText={
          "Posts with engaging captions generally receive more comments, highlighting the importance of well-crafted captions."
        }
      />
                  <InsightBlock
        typeIcon="lamp"
        altIcon="Lamp"
        bigText={"Visual Appeal"}
        littleText={
          "Posts with eye-catching visuals tend to receive more likes, emphasizing the importance of high-quality images."
        }
      />
                  <InsightBlock
        typeIcon="lamp"
        altIcon="Lamp"
        bigText={"Utilize Story Features"}
        littleText={
          "Regularly using Instagram Stories can enhance audience engagement and maintain their interest in your content."
        }
      />
    </div>
  )
}

export default InfoBlocksV3
