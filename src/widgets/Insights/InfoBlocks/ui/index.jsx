import React from "react"
import "./infoBlocks.scss"
import { InsightBlock } from "../../../../shared"

const InfoBlocks = ({ text }) => {
  return (
    <div className="info-blocks">
      <p className="title24-bold-urbanist">{text}</p>
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Post more often"}
        littleText={
          "Increase the frequency of your posts keep your audience engaged. Aim for at least 3-4 posts per week."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Create Captivating Captions"}
        littleText={
          "Write captions that motivate your followers to comment, share their opinions, or tag friends."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Interact with Your Audience"}
        littleText={
          "Reply to comments and messages quickly to build a community and strengthen loyalty."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Use Instagram Stories"}
        littleText={
          "Leverage Instagram Stories to keep your audience engaged with daily updates and behind-the-scenes content."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Include Interactive Elements"}
        littleText={
          "Incorporate features like polls, questions, and quizzes in your Stories to boost engagement."
        }
      />
      <InsightBlock
        typeIcon="reccomend"
        altIcon="ReccomendIcon"
        bigText={"Work with Influencers"}
        littleText={
          "Team up with influencers in your niche to expand your reach and enhance engagement on your posts."
        }
      />
    </div>
  )
}

export default InfoBlocks
