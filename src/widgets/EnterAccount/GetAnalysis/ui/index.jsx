import React from "react"
import "./getAnalysis.scss"
import { InstAnalysis } from "../../../../features"
import { Icon } from "../../../../shared"

const GetAnalysis = ({ handleSubmit, handleChange, showPopup, nickname }) => {
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
        <InstAnalysis onClick={handleSubmit} nickname={nickname} handleChange={handleChange} />
        <div className="get-analysis-defence">
          <Icon type="defence" width={28} height={28} alt="icon"></Icon>
          <p className="title14-regular-urbanist defence-text">
            Your instagram account is safe. We don’t see or store your password.
            We will never action on your behalf.
          </p>
        </div>
        <button onClick={() => showPopup("privateAccount")}>
          Test Private Account Popup
        </button>
        <button onClick={() => showPopup("accountNotFound")}>
          Test Account Not Found Popup
        </button>
        <button onClick={() => showPopup("somethingWentWrong")}>
          Test Something Went Wrong Popup
        </button>
      </div>
    </div>
  )
}

export default GetAnalysis
