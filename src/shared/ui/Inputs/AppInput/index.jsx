import React from "react"
import "./appInput.scss"

const AppInput = ({
  onChange,
  placeholder,
  text,
  type,
  isError,
  classAppInput,
}) => {
  return (
    <div className="app-input">
      <p className="title14-medium-urbanist app-input-text">{text}</p>
      <input
        className={`title16-medium-urbanist app-input-item ${classAppInput} ${isError ? "error" : ""}`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      ></input>
    </div>
  )
}

export default AppInput
