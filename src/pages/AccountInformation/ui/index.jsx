import React from "react"
import "./accountInformation.scss"
import { AccountCenterBlock, AccountUpperStatistic, PopupWindow } from "../../../widgets"
import { Analytics, News, Insights } from "../../../shared/lib/icons/icons"

const AccountInformation = () => {
  return (
    <div className="account-information-page">
      <div className="upper-gradient"></div>
      <AccountUpperStatistic />
      <div className="center-block-wrapper">
        <AccountCenterBlock background={"Analytics"} IconComponent={Analytics} bigText={"Analytics"} littleText={"Analysis of your account metrics and statistics"}/>
        <AccountCenterBlock background={"Insights"} I IconComponent={Insights} bigText={"Insights"} littleText={"Find out how to improve your account metrics"}/>
        <AccountCenterBlock background={"News"} I IconComponent={News} bigText={"News"} littleText={"Stay up to date with current and popular trends"}/>
      </div>

    </div>
  )
}

export default AccountInformation
