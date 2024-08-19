import React from "react"
import "./accountInformation.scss"
import { AccountCenterBlock, AccountUpperStatistic } from "../../../widgets"
import { Analytics, News, Insights } from "../../../shared/lib/icons/icons"

const AccountInformation = () => {
  return (
    <div className="account-information-page">
      <div className="upper-gradient"></div>
      <AccountUpperStatistic />
      <div className="center-block-wrapper">
        <AccountCenterBlock
          background={"Analytics"}
          IconComponent={Analytics}
          bigText={"Analytics"}
          littleText={"Analysis of your account metrics and statistics"}
          link="/account-analytics"
        />
        <AccountCenterBlock
          background={"Insights"}
          IconComponent={Insights}
          bigText={"Insights"}
          littleText={"Find out how to improve your account metrics"}
          link="/insights"
        />
        <AccountCenterBlock
          background={"News"}
          IconComponent={News}
          bigText={"News"}
          littleText={"Stay up to date with current and popular trends"}
          link="/news"
        />
      </div>
    </div>
  )
}

export default AccountInformation
