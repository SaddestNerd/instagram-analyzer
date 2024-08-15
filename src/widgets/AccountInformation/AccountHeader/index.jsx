import React, { useEffect, useState } from "react"
import "./accountHeader.scss"
import { Icon } from "../../../shared"
import { BackIcon, MenuIcon } from "../../../shared/lib/icons/icons"
import { HeaderMenu } from "../../../features"
import PopupWindow from "../../PopupWindow/ui"
import { useNavigate } from "react-router-dom"

const AccountHeader = ({ isLogo }) => {
  const [headerOpen, setHeaderOpen] = useState(false)
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [backgroundOpen, setBackgroundOpen] = useState(false)

  const handleOpenBackgroundHeader = (header, background, popup) => {
    setHeaderOpen(header)
    setBackgroundOpen(background)
    setPopUpOpen(popup)
  }
  useEffect(() => {
    if (backgroundOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [backgroundOpen]);

  const navigate = useNavigate();

  const onClickBack = () => {
      navigate(-1);
  };


  return (
    <div className={"account-header" + (backgroundOpen ? " isActive" : "")}>
      <div className="account-flex">
        {isLogo ? 
         <Icon type="logo" alt="logo" width={60} height={60}></Icon> :
          <span
            onClick={onClickBack}
            className="menu-icon-background">
            <BackIcon />
          </span>
        }
        <span className="title20-medium-urbanist">Home</span>
        <span
          onClick={() => { handleOpenBackgroundHeader(true, true, false) }}
          className="menu-icon-background">
          <MenuIcon />
        </span>
      </div>

      <div className={"header-blur-background" + (backgroundOpen ? " isActive" : "")}>
        <HeaderMenu
          onClickExit={() => handleOpenBackgroundHeader(false, false, false)}
          onClickPopup={() => handleOpenBackgroundHeader(false, true, true)}
          setPopUpOpen={setPopUpOpen}
          headerOpen={headerOpen}
          popUpOpen={popUpOpen}
        />
        {popUpOpen ?
          <PopupWindow onClose={() => handleOpenBackgroundHeader(false, false, false)} type="logOut" isRed={true} show={popUpOpen} bgRedColor={true} />
          : <></>
        }

      </div>
    </div>
  )
}

export default AccountHeader
