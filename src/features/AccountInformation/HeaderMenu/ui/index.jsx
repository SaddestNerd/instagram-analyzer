import React, { useEffect } from "react"
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
import { Auth } from "../../../../shared/api/axios/requests/auth/auth.service"

const HeaderMenu = ({ onClickExit, headerOpen, onClickPopup }) => {



  return (
    <div className="header-menu-wrapper">
      <div className={"header-menu" + (headerOpen ? " isActive" : "")}>
        <HeaderMenuElement
          IconComponent={SwitchInstagramAccount}
          text={"Switch Instagram Account"}
          link="/enter-account"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={Analytics}
          text={"Analytics"}
          link="/account-analytics"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={Insights}
          text={"Insights"}
          link="/insights"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={News}
          text={"News"}
          link="/news"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={TermOfService}
          text={"Term of Service"}
          link="/terms-of-servise"
          target="_blank"
          onClick={onClickExit}
        />
        <HeaderMenuElement
          IconComponent={PrivacyPolicy}
          text={"Privacy Policy"}
          link="/privacy-policy"
          target="_blank"
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
