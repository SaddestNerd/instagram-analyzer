import React, { useState } from "react"
import { AppInput, AppButton } from "../../../../shared"
import "./instAnalysis.scss"
import Icon from "../../../../shared/ui/Icons"

const InstAnalysis = ({ onClick, handleChange, nickname }) => {

  return (
    <div className="data-analys-inst-block">
      <div className="data-analys-inst-input">
        <Icon type="email" alt="email" width={30} height={32} color="#315DF4" />
        <AppInput
          placeholder="“Sherlock” for example"
          onChange={handleChange}
          value={nickname}
          type="text"
        />
      </div>
      <AppButton
        text="Get my analysis"
        onClick={onClick}
        isDisabled={nickname.length < 1}
      />
    </div>
  )
}

export default InstAnalysis
