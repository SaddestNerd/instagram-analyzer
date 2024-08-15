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
          link="/enter-account"
          rel="noopener noreferrer"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={Analytics}
          text={"Analytics"}
          link="/account-analytics"
          rel="noopener noreferrer"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={Insights}
          text={"Insights"}
          link="/insights"
          rel="noopener noreferrer"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={News}
          text={"News"}
          link="/news"
          rel="noopener noreferrer"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={TermOfService}
          text={"Term of Service"}
          // link="/account-analytics"
          rel="noopener noreferrer"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={PrivacyPolicy}
          text={"Privacy Policy"}
          // link="/account-analytics"
          rel="noopener noreferrer"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={Exit}
          text={"Log Out"}
          isRed={"true"}
          onClick={onClickPopup}
        />
      </div>

      <div className={"exit-button-wrapper" + (headerOpen ? " isActive" : "")}>
        <HeaderMenuExitButton onClick={onClickExit} />
      </div>
    </div>
  )
}

export default HeaderMenu
