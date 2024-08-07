import React from "react"
import { DefaultButton } from "../../../../shared"

const StartNavigation = ({ text, onClick, link, typeIcon, widthSize, heightSize, altIcon }) => {
  return (
    <DefaultButton
      text={text}
      onClick={onClick}
      link={link}
      typeIcon={typeIcon}
      widthSize={widthSize}
      heightSize={heightSize}
      altIcon={altIcon}
      
    />
  )
}

export default StartNavigation
