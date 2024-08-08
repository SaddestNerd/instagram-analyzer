import React from "react"
import "./defaultInput.scss"

const DefaultInput = ({ onChange, placeholder,description }) => {
  return (
    <div className="default-input">
      <p className="desciption title11-regular-outfit ">{description}</p>
      <input
        className="title16-regular-outfit default-input-item"
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        maxlength="3"
      ></input>
    </div>
  )
}

export default DefaultInput
