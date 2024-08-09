import React from "react"

const DefaultInput = ({ onChange }) => {
  return (
    <div className="default-input fixed-width">
      <p className="desciption title11-regular-outfit ">Expires on</p>
      <div className="flex">
        <input
          className="title16-regular-outfit default-input-item"
          placeholder={"MM"}
          type="text"
          onChange={onChange}
          maxLength={2}
        ></input>
        <input
          className="title16-regular-outfit default-input-item"
          placeholder={"YY"}
          type="text"
          onChange={onChange}
          maxLength={2}
        ></input>
      </div>
    </div>
  )
}

export default DefaultInput
