import React from "react"
import "./blueButton.scss"

const BlueButton = ({ onClick, link, IconComponent }) => {
  return (
    <button className="blue-button" onClick={onClick}>
      <IconComponent />
    </button>
  )
}

export default BlueButton
