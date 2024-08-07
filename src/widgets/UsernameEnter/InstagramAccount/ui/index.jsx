import React, { useState } from "react"
import "./instagramAccount.scss"
import { StartNavigation, EnterUserWithIcon } from "../../../../features"
import { Link } from "react-router-dom"

const InstagramAccount = ({ nextForm }) => {
  const [username, setUsername] = useState("")

  const handleInputChange = (value) => {
    setUsername(value)
  }
  return (
    <div className="instagram-account-section">
      <div className="instagram-account-block">
        <p className="title30-semibold-outfit">Instagram account</p>
        <p className="title16-regular-outfit">
          Enter your Instagram username to get full data analysis
        </p>
        <EnterUserWithIcon onInputChange={handleInputChange} />
        <StartNavigation
          text="start analysis"
          onClick={nextForm}
          isDisabled={username.length < 3}
        />
        <p className="title14-regular-outfit forgotten-block">
          Forgotten your account name?{" "}
          <Link to="/" className="title16-semibold-outfit">
            Skip step
          </Link>
        </p>
        <p className="title11-regular-outfit copyright-block">
          Copyright ® 2024 FollowStats: Profile Analyzer. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default InstagramAccount
