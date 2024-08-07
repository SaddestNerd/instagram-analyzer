import React from "react"
import "./instagramAccount.scss"
import { StartNavigation, EnterUserWithIcon } from "../../../../features"

const InstagramAccount = ({
  title,
  description,
  buttonText,
  nextForm,
  isLastForm,
}) => {
  return (
    <div className="instagram-account-section">
      <div className="instagram-account-block">
        <p className="title30-semibold-outfit">Instagram account</p>
        <p className="title16-regular-outfit">
          Enter your Instagram username to get full data analysis
        </p>
        <EnterUserWithIcon/>
        <StartNavigation
          text="start analysis"
          onClick={nextForm}
          link={isLastForm ? "/main" : "/onboarding"}
        />
        <p className="title14-regular-outfit forgotten-block">
          Forgotten your account name?{" "}
          <span className="title16-semibold-outfit">Skip step</span>
        </p>
        <p className="title11-regular-outfit copyright-block">
          Copyright ® 2024 FollowStats: Profile Analyzer. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default InstagramAccount
