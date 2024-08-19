import React, { useState } from "react"
import { DefaultInput, DefaultButton } from "../../../../shared"
import "./dataAnalysisInst.scss"
import Icon from "../../../../shared/ui/Icons"

const DataAnalysisInst = ({ onClick }) => {
  const [username, setUsername] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setUsername(value)
  }

  return (
    <div className="data-analys-block">
      <div className="data-analys-input">
        <Icon type="email" alt="email" width={30} height={32} color="#6B3CFF" />
        <DefaultInput
          placeholder="Enter your username"
          onChange={handleChange}
          value={username}
          type="text"
        />
      </div>
      <DefaultButton
        text="start analysis"
        onClick={onClick}
        isDisabled={username.length < 1}
      />
    </div>
  )
}

export default DataAnalysisInst
