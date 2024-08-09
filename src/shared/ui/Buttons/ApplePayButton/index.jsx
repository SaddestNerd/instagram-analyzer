import React from "react"
import { Link } from "react-router-dom"
import "./defaultButton.scss"
import Icon from "../../Icons"
import { ApplePay } from "../../../lib/icons/icons"
const DefaultButton = ({
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
    <Link to={link} className="apple-button">
      <button
        className="apple-button-item"
        onClick={onClick}
        disabled={isDisabled}
      >
        <span className="title16-semibold-outfit">{text}</span>
        <ApplePay />
      </button>
    </Link>
  )
}

export default DefaultButton
