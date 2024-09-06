import React from "react"
import "./createAcc.scss"
import { AccessToApp } from "../../../../features"
import { Icon } from "../../../../shared"

const CreateAcc = ({token}) => {
  return (
    <div className="create-acc-section">
      <div className="create-acc-block">
        <Icon
          type="userIcon"
          alt="userIcon"
          width={106}
          height={106}
          className="create-acc-img"
        />
        <p className="title24-semibold-outfit">Instagram account</p>
        <p className="title16-regular-outfit">
          Enter your Instagram username to get full data analysis
        </p>
        <AccessToApp token={token}/>
      </div>
    </div>
  )
}

export default CreateAcc
