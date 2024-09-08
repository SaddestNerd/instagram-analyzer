import React, { useEffect } from "react"
import "./accountInformation.scss"
import { AccountCenterBlock, AccountUpperStatistic } from "../../../widgets"
import { Analytics, News, Insights } from "../../../shared/lib/icons/icons"
import GetInstagamData from "../../../shared/lib/hooks/instagram/instagramSelector.hook"
import useInstagramData from "../../../shared/lib/hooks/instagram/instagram.hook"
import { Loader } from "../../../shared"

const AccountInformation = () => {

  const { loading, profile, error } = GetInstagamData();
  const { dispatchInstagramAccount } = useInstagramData();


  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatchInstagramAccount();

      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, [])

  console.log(error)

  if (loading) {
    return <div className="account-information-page"><div className="upper-gradient"></div><Loader/></div>
  }

  
  if (error === "ThrottlerException: Too Many Requests") {
    return <div className="account-information-page"><div className="upper-gradient"></div>
    <div className="center-wrapper">
      <Loader/>
      <p className="title24-bold-urbanist">Server Error: Too many requests</p>
      <p className="title16-semibold-urbanist">Try reload page later</p>
    </div>
    </div>
  }



  return (
    <div className="account-information-page">
      <div className="upper-gradient"></div>
      <AccountUpperStatistic profile={profile} />
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
