import React from "react"
import "./headerMenuExitButton.scss"
import { BlueCross } from "../../../lib/icons/icons"
const HeaderMenuExitButton = ({ onClick, isDisabled }) => {
  return (
    <button
      className="header-exit-button"
      onClick={onClick}
      disabled={isDisabled}
    >
      <BlueCross />
    </button>
  )
}

export default HeaderMenuExitButton
