import React from "react"
import "./blueButton.scss"

const BlueButton = ({ onClick, IconComponent }) => {
  return (
    <div className="blue-button" onClick={onClick}>
      <IconComponent />
    </div>
  )
}

export default BlueButton
