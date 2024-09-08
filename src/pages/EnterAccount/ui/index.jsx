import React, { useState } from "react"
import { GetAnalysis, AnalysingProfile, PopupWindow } from "../../../widgets"
import "./enterAccount.scss"
import { useNavigate } from "react-router-dom"
import useEnterAccountNavigate from "../model/useEnterAccountNavigate"
import GetUserData from "../../../shared/lib/hooks/user/userSelector.hook"
import useUserData from "../../../shared/lib/hooks/user/user"

const EnterAccount = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [popupType, setPopupType] = useState(null);
  const navigate = useNavigate();
  const { loading, error } = GetUserData();
  const { progress } = useEnterAccountNavigate(loading, navigate)

  const { dispatchInstagramAccount } = useUserData();

  
  const [nickname, setNickname] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setNickname(value)
  }


  const closePopup = () => {
    setPopupType(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchInstagramAccount(nickname)
  };
  console.log(progress)

  return (
    <div className="enter-account-page">
      <div
        className={`enter-account-wrapper ${popupType ? "blur-background" : ""}`}
      >
        {!loading  ? (
          <GetAnalysis handleSubmit={handleSubmit} nickname={nickname} handleChange={handleChange} showPopup={setPopupType} />
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
