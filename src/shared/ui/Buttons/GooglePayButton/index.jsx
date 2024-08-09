import React from "react"
import { Link } from "react-router-dom"
import "./defaultButton.scss"
import Icon from "../../Icons"
import { GooglePay } from "../../../lib/icons/icons"
const DefaultButton = ({
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
    <Link to={link} className="default-button">
      <button
        className="default-button-item"
        onClick={onClick}
        disabled={isDisabled}
      >
        <GooglePay />
      </button>
    </Link>
  )
}

export default DefaultButton
