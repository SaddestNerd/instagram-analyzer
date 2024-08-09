import React from "react"
import "./emojiBlock.scss"

const EmojiBlock = ({ text, emoji }) => {
  return (
    <div className="emoji-block">
      <div className="center-wrapper">
        <div className="emoji-wrapper">
          <img className="emoji" src={emoji} alt="emoji" />
        </div>
        <p className="title14-semibold-outfit">{text}</p>
      </div>
    </div>
  )
}

export default EmojiBlock
