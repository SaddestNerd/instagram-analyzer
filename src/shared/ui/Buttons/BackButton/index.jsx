import React from "react"
import "./backButton.scss"
import Icon from "../../Icons"
import { Link } from "react-router-dom"

const BackButton = ({ onClick, link }) => {
  return (
    <Link to={link} rel="noopener noreferrer">
      <button className="back-button" onClick={onClick}>
        <Icon type="backIcon" width={24} height={24} alt="BackIcon"></Icon>
      </button>
    </Link>
  )
}

export default BackButton
