import React, { useState } from "react"
import { DefaultInput, AppButton } from "../../../../shared"
import "./instAnalysis.scss"
import Icon from "../../../../shared/ui/Icons"

const InstAnalysis = ({ onClick }) => {
  const [username, setUsername] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setUsername(value)
  }

  return (
    <div className="data-analys-inst-block">
      <div className="data-analys-inst-input">
        <Icon type="email" alt="email" width={30} height={32} color="#315DF4" />
        <DefaultInput
          placeholder="“Sherlock” for example"
          onChange={handleChange}
          value={username}
          type="text"
          classAppInput="app-input-item"
        />
      </div>
      <AppButton
        text="Get my analysis"
        onClick={onClick}
        isDisabled={username.length < 1}
      />
    </div>
  )
}

export default InstAnalysis
