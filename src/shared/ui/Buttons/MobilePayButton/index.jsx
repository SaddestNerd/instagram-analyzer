import React from "react"
import { Link } from "react-router-dom"
import "./defaultButton.scss"
import Icon from "../../Icons"
import { ApplePay, GooglePay } from "../../../lib/icons/icons"
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
  type,
}) => {
  return (
    <Link to={link} className={type === "apple" ? "apple-button" : "google-button"}>
      <button
        className={type === "apple" ? "apple-button-item" : "google-button-item"}
        onClick={onClick}
        disabled={isDisabled}
      >
        <span className="title16-semibold-outfit">{text}</span>
        {type === "apple" ?
          <ApplePay /> : <GooglePay/>
        }
      </button>
    </Link>
  )
}

export default DefaultButton
