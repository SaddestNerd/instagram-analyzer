import React from "react"
import {
  CardNumberElement
} from "@recurly/react-recurly"
import "../cardInputs.scss"

const CardNumberElementInput = ({
  placeholder,
  text,
}) => {

  return (
    <div className="default-input fixed-width">
      <p className="title11-regular-outfit default-input-text">{text}</p>
      <CardNumberElement
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
            content: "XXXX XXXX XXXX XXXX",
          },
        }}
      />
    </div>
  )
}

export default CardNumberElementInput
