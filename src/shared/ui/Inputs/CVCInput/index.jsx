import React from "react"


const DefaultInput = ({ onChange, placeholder, description }) => {
  return (
    <div className="default-input fixed-width">
      <p className="title11-regular-outfit ">CVC</p>
      <input
        className="title16-regular-outfit default-input-item"
        placeholder={"CVC"}
        type="text"
        onChange={onChange}
        maxlength="3"
      ></input>
    </div>
  )
}

export default DefaultInput
