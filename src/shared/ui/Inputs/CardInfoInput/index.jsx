import React from "react"
import { useFormatNuber } from "../../../lib/hooks/useFormatNuber"

const CardInfoInput = ({
  onChange = () => {},
  placeholder,
  text,
  maxLength,
}) => {
  const { inputValue, handleInputChange } = useFormatNuber(maxLength, onChange)

  return (
    <div className="default-input fixed-width">
      <p className="title11-regular-outfit default-input-text">{text}</p>
      <input
        className="title16-regular-outfit default-input-item"
        placeholder={placeholder}
        type="text"
        inputMode="numeric"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={maxLength}
      ></input>
    </div>
  )
}

export default CardInfoInput
