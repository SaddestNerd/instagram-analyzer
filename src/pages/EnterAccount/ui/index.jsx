import React, { useState } from "react"
import { GetAnalysis, AnalysingProfile, PopupWindow } from "../../../widgets"
import "./enterAccount.scss"
import { useNavigate } from "react-router-dom"
import useEnterAccountNavigate from "../model/useEnterAccountNavigate"

const EnterAccount = () => {
  const [currentForm, setCurrentForm] = useState(0)
  const [popupType, setPopupType] = useState(null)
  const navigate = useNavigate()
  const { progress } = useEnterAccountNavigate(currentForm, navigate)

  const nextForm = () => {
    setCurrentForm(1)
  }
  const closePopup = () => {
    setPopupType(null)
  }
  return (
    <div className="enter-account-page">
      <div
        className={`enter-account-wrapper ${popupType ? "blur-background" : ""}`}
      >
        {currentForm === 0 ? (
          <GetAnalysis nextForm={nextForm} showPopup={setPopupType} />
        ) : (
          <AnalysingProfile progress={progress} />
        )}
      </div>
      {popupType && (
        <>
          <div className="overlay"></div>
          <PopupWindow type={popupType} onClose={closePopup} />
        </>
      )}
    </div>
  )
}

export default EnterAccount
