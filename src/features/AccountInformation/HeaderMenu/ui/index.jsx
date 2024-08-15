import React from "react"
import { HeaderMenuElement, HeaderMenuExitButton } from "../../../../shared"
import "./headerMenu.scss"
import {
  Analytics,
  Exit,
  Insights,
  News,
  PrivacyPolicy,
  SwitchInstagramAccount,
  TermOfService,
} from "../../../../shared/lib/icons/icons"

const HeaderMenu = ({ onClickExit, headerOpen, onClickPopup }) => {
  return (
    <div className="header-menu-wrapper">
      <div className={"header-menu" + (headerOpen ? " isActive" : "")}>
        <HeaderMenuElement
          IconComponent={SwitchInstagramAccount}
          text={"Switch Instagram Account"}
        />
        <HeaderMenuElement IconComponent={Analytics} text={"Analytics"} />
        <HeaderMenuElement IconComponent={Insights} text={"Insights"} />
        <HeaderMenuElement IconComponent={News} text={"News"} />
        <HeaderMenuElement
          IconComponent={TermOfService}
          text={"Term of Service"}
        />
        <HeaderMenuElement
          IconComponent={PrivacyPolicy}
          text={"Privacy Policy"}
        />
        <HeaderMenuElement
          IconComponent={Exit}
          text={"Log Out"}
          isRed={"true"}
          onClick={onClickPopup}
        />
      </div>

      <div className={"exit-button-wrapper" + (headerOpen ? " isActive" : "")} >
        <HeaderMenuExitButton onClick={onClickExit} />
      </div>

    </div>
  )
}

export default HeaderMenu
