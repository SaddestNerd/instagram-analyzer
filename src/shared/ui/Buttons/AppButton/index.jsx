import React from "react"
import { Link } from "react-router-dom"
import "./appButton.scss"
import Icon from "../../../../shared/ui/Icons"
const AppButton = ({
  text,
  link,
  onClick,
  typeIcon,
  widthSize,
  heightSize,
  colorIcon,
  altIcon,
  classNameIcon,
  isDisabled,
  color
}) => {
  return (
    <Link to={link} className="app-button" rel="noopener">
      <button
       className={"app-button-item " + color}
        onClick={onClick}
        disabled={isDisabled}
      >
        <span className="title16-medium-urbanist">{text}</span>
        <Icon
          type={typeIcon}
          width={widthSize}
          height={heightSize}
          color={colorIcon}
          alt={altIcon}
          className={classNameIcon}
        ></Icon>
      </button>
    </Link>
  )
}

export default AppButton
