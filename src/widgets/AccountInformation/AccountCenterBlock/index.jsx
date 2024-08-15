import React from "react"
import "./accountCenterBlock.scss"
import { BlueButton } from "../../../shared"
import { UpArrow } from "../../../shared/lib/icons/icons"


const AccountCenterBlocks = ({
  bigText,
  littleText,
  IconComponent,
  background,
  link
}) => {
  return (
    <div className={"account-center-blocks " + background}>
      <div className="center-blocks-upper-wrapper">
        <div className="background-icon">
          <IconComponent />
        </div>
        <BlueButton IconComponent={UpArrow} link={link}/>
      </div>

      <div className="center-blocks-bottom-wrapper">
        <p className="title20-medium-urbanist">{bigText}</p>
        <p className="title12-regular-urbanist">{littleText}</p>
      </div>
    </div>
  )
}

export default AccountCenterBlocks
