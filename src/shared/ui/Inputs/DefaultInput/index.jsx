import React from "react"
import { Link } from "react-router-dom"
import "./defaultInput.scss"
import Icon from "../../Icons"
const DefaultInput = ({
  onClick,
  id,
  widthSize,
  heightSize,
  colorIcon,
  altIcon,
  classNameIcon,
  placeholder,
}) => {
  return (
    <div className="default-input">
      <input
        className="default-input-item"
        placeholder={placeholder}
        onClick={onClick}
      >
      </input>
    </div>
  )
}

export default DefaultInput
