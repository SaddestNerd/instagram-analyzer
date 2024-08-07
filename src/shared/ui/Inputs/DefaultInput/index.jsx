import React from "react"
import "./defaultInput.scss"

const DefaultInput = ({ onChange, placeholder }) => {
  return (
    <div className="default-input">
      <input
        className="title16-regular-outfit default-input-item"
        placeholder={placeholder}
        type="text"
        onChange={onChange}
      ></input>
    </div>
  )
}

export default DefaultInput
