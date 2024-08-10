import React from "react"
import "./defaultInput.scss"

const DefaultInput = ({
  onChange,
  placeholder,
  text,
  type,
  isError,
  classAppInput,
}) => {
  return (
    <div className="default-input">
      <p className="title11-regular-outfit default-input-text">{text}</p>
      <input
        className={`title16-regular-outfit default-input-item ${classAppInput} ${isError ? "error" : ""}`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      ></input>
    </div>
  )
}

export default DefaultInput
