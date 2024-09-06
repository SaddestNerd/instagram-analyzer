import React, { useEffect, useState } from "react"
import "./accountUpperStatistic.scss"
import { StatisticBlock } from "../../../shared"
import Avatar from "../../../shared/ui/Avatar"
import useInstagramData from "../../../shared/lib/hooks/instagram/instagram.hook"
import GetInstagamData from "../../../shared/lib/hooks/instagram/instagramSelector.hook"

const AccountUpperStatistic = () => {



  const { dispatchInstagramAccount } = useInstagramData();
  const { loading, profile } = GetInstagamData();


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


  if (loading) return <></>

  return (
    <div className="account-upper-statistic">
      <Avatar fullname={profile?.fullName} nickname={profile?.username} img={profile?.pictureURL}/>
      <div className="flex-statistics">
        <StatisticBlock svg={"Followers"} name={"Followers"} stat={profile?.followersCount} />
        <StatisticBlock svg={"Posts"} name={"Posts"} stat={profile?.postsCount} />
        <StatisticBlock svg={"Following"} name={"Following"} stat={profile?.followingCount} />
      </div>
    </div>
  )
}

export default AccountUpperStatistic
