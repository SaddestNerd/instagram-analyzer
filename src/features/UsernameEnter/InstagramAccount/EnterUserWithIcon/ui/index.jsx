import React from "react"
import { DefaultInput } from "../../../../../shared"
import "./enterUserWithIcon.scss"
import Icon from "../../../../../shared/ui/Icons"

const EnterUserWithIcon = ({ onInputChange }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value)
  }

  return (
    <div className="enteruser-input-block">
      <Icon type="email" alt="email" width={30} height={32}></Icon>
      <DefaultInput placeholder="Enter your username" onChange={handleChange} />
    </div>
  )
}

export default EnterUserWithIcon
