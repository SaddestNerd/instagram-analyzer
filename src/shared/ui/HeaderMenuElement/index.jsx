import React from "react"
import "./headerMenuElement.scss"
import { Link } from "react-router-dom"

const HeaderMenuElement = ({
  IconComponent,
  text,
  isRed,
  onClick,
  link,
  target,
}) => {
  return (
    <Link
      to={link}
      target={target}
      rel="noopener noreferrer"
      className="header-menu-link"
    >
      <div
        onClick={onClick}
        className={"header-menu-element" + (isRed ? " red" : "")}
      >
        <div className="flex-element">
          <div className="icon">
            <IconComponent />
          </div>
          <div className="text title20-medium-urbanist">{text}</div>
        </div>
      </div>
    </Link>
  )
}

export default HeaderMenuElement
