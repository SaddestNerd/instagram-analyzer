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
}) => {
  return (
    <Link to={link} className="app-button">
      <button
        className="app-button-item"
        onClick={onClick}
        disabled={isDisabled}
      >
        <span className="title16-semibold-outfit">{text}</span>
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
