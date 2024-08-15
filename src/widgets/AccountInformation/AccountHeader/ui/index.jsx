import React, { useState } from "react"
import "./accountHeader.scss"
import { Icon } from "../../../../shared"
import { MenuIcon } from "../../../../shared/lib/icons/icons"
import { HeaderMenu } from "../../../../features"
import { PopupWindow } from "../../.."
const CreateAcc = () => {
  const [headerOpen, setHeaderOpen] = useState(false)
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [backgroundOpen, setBackgroundOpen] = useState(false)

  const handleOpenBackgroundHeader = (header, background, popup) => {
    setHeaderOpen(header)
    setBackgroundOpen(background)
    setPopUpOpen(popup)
  }


  return (
    <div className="account-header">
      <div className="account-flex">
        <Icon type="logo" alt="logo" width={60} height={60}></Icon>
        <span className="title20-medium-urbanist">Home</span>
        <span
          onClick={() => {handleOpenBackgroundHeader(true, true, false)}}
          className="menu-icon-background"
        >
          <MenuIcon />
        </span>
      </div>

      <div
        className={"header-blur-background" + (backgroundOpen ? " isActive" : "")}
      >
        <HeaderMenu
          onClickExit={() => handleOpenBackgroundHeader(false, false, false)}
          onClickPopup={() => handleOpenBackgroundHeader(false, true, true)}
          setPopUpOpen={setPopUpOpen}  
          headerOpen={headerOpen}
          popUpOpen={popUpOpen}
        />
    
        <PopupWindow type="logOut" show={popUpOpen} bgRedColor={true}/>
      </div>

    </div>
  )
}

export default CreateAcc
