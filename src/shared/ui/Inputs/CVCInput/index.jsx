import React from "react"

const CardInfoInput = ({ onChange, placeholder, text, maxLength }) => {
  return (
    <div className="default-input fixed-width">
      <p className="title11-regular-outfit default-input-text">{text}</p>
      <input
        className="title16-regular-outfit default-input-item"
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        maxLength={maxLength}
      ></input>
    </div>
  )
}

export default CardInfoInput
