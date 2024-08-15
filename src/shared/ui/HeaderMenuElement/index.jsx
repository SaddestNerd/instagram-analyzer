import React from "react"
import "./headerMenuElement.scss"

const HeaderMenuElement = ({ IconComponent, text, isRed, onClick }) => {
  return (
    <div onClick={onClick} className={"header-menu-element" + (isRed ? " red" : "")}>
      <div className="flex-element">
        <div className="icon">
          <IconComponent />
        </div>
        <div className="text title20-medium-urbanist">{text}</div>
      </div>
    </div>
  )
}

export default HeaderMenuElement
