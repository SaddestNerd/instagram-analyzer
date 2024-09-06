import React from "react"
import {
  CardYearElement
} from "@recurly/react-recurly"
import "../cardInputs.scss"

const CardYearElementInput = ({
  placeholder,
  text,
}) => {


  return (
    <div className="default-input fixed-width">
      <p className="title11-regular-outfit default-input-text" style={{color: "transparent"}}>{text}</p>
      <CardYearElement
        className="recurly-element-number"
        placeholder={placeholder}
        style={{
          fontSize: "16px",
          fontFamily: "Outfit, sans-serif",
          fontWeight: 400,
          lineHeight: "125%",
          letterSpacing: "0%",
          fontColor: "#2b2942",
          placeholder: {
            color: "#b0aecc !important",
            content: "YY",
          },
        }}
      />
    </div>
  )
}

export default CardYearElementInput
