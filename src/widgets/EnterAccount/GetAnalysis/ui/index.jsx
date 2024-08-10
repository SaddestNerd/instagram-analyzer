import React from "react"
import "./getAnalysis.scss"
import { InstAnalysis } from "../../../../features"
import { Icon } from "../../../../shared"

const GetAnalysis = ({ nextForm }) => {
  return (
    <div className="get-analysis-section">
      <div className="get-analysis-block">
        <Icon
          type="instCreate"
          alt="instCreate"
          width={129}
          height={129}
          className="get-analysis-img"
        />
        <p className="title24-medium-urbanist">Instagram account</p>
        <p className="title14-regular-urbanist">
          Enter your Instagram username to get full data analysis
        </p>
        <InstAnalysis onClick={nextForm} />
        <div className="get-analysis-defence">
          <Icon
            type="defence"
            width={28}
            height={28}
            alt="icon"
            className="get-analysis-img"
          ></Icon>
          <p className="title14-regular-urbanist defence-text">
            Your instagram account is safe. We don’t see or store your password.
            We will never action on your behalf.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetAnalysis
