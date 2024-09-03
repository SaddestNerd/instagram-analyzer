import React from "react"
import "./defaultInput.scss"

const DefaultInput = ({
  onChange,
  placeholder,
  text,
  type,
  isError,
  classAppInput,
  inputMode,
  maxLength,
  value,
  name,
  dataRecurly
}) => {
  return (
    <div className="default-input">
      <p className="title11-regular-outfit default-input-text">{text}</p>
      <input
        data-recurly={dataRecurly}
        name={name}
        className={`title16-regular-outfit default-input-item ${classAppInput} ${isError ? "error" : ""}`}
        placeholder={placeholder}
        type={type}
        inputMode={inputMode}
        onChange={onChange}
        maxLength={maxLength}
        value={value}
      ></input>
    </div>
  )
}

export default DefaultInput
