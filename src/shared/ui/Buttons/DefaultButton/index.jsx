import React from "react"
import { Link } from "react-router-dom"
import "./defaultButton.scss"

const DefaultButton = ({ text, link, onClick }) => {
  return (
    <Link to={link} className="default-button">
      <button className="default-button-item" onClick={onClick}>
        <span className="title16-semibold-outfit">{text}</span>
      </button>
    </Link>
  )
}

export default DefaultButton
