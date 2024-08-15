import React from "react"
import "./blueButton.scss"
import { Link } from "react-router-dom"

const BlueButton = ({ onClick, link, IconComponent }) => {
  return (
    <Link to={link} rel="noopener">
      <button className="blue-button" onClick={onClick}>
        <IconComponent />
      </button>
    </Link>
  )
}

export default BlueButton
