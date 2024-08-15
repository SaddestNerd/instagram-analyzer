import React from "react"
import "./headerMenuElement.scss"

const ProgressBar = ({ IconComponent, text, isRed, onClick }) => {
  return (
    <div className={"header-menu-element" + (isRed ? " red" : "")} onClick={onClick}>
      <div className="flex-element">
        <div className="icon">
          <IconComponent />
        </div>
        <div className="text title20-medium-urbanist">{text}</div>
      </div>
    </div>
  )
}

export default ProgressBar
