import React from "react"
import "./accountInformation.scss"
import { AccountUpperStatistic } from "../../../widgets"

const AccountInformation = () => {
  return (
    <div className="account-information-page">
      <div className="upper-gradient"></div>
      <AccountUpperStatistic />
    </div>
  )
}

export default AccountInformation
