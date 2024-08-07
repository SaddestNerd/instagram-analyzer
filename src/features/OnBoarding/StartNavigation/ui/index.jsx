import React from "react"
import { DefaultButton } from "../../../../shared"

const StartNavigation = ({ text, onClick, link }) => {
  return (
    <DefaultButton
      text={text}
      onClick={onClick}
      link={link}
      typeIcon="arrow"
      widthSize="18"
      heightSize="14"
      altIcon="arrow"
    />
  )
}

export default StartNavigation
