import React from "react"
import "./onBoarding.scss"
import BG1 from "../../../shared/assets/background1Page1.png"
import BG2 from "../../../shared/assets/background2Page1.png"
import Users1 from "../../../shared/assets/usersPage1.png"
import { OnBoardingStart } from "../../../widgets"

const OnBoardingPage = () => {
  return (
    <div className="onboarding-wrapper">
      <div className="onboarding-upper-img">
        <img
          className="onboarding-upper-background"
          src={Users1}
          alt="users"
        ></img>
        <img
          className="onboarding-upper-background1"
          src={BG1}
          alt="background-image"
        ></img>
        <img
          className="onboarding-upper-background2"
          src={BG2}
          alt="background-image"
        ></img>
      </div>
      <OnBoardingStart />
    </div>
  )
}

export default OnBoardingPage
