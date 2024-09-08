import React, { useEffect, useState } from "react"
import { GetAnalysis, AnalysingProfile, PopupWindow } from "../../../widgets"
import "./enterAccount.scss"
import { useNavigate } from "react-router-dom"
import useEnterAccountNavigate from "../model/useEnterAccountNavigate"
import GetUserData from "../../../shared/lib/hooks/user/userSelector.hook"
import useUserData from "../../../shared/lib/hooks/user/user"
import { resetUserState, setError} from "../../../features/Slices/User/slice"
import { useDispatch } from "react-redux"

const EnterAccount = () => {
  const [loadingForm, setLoadingForm] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const navigate = useNavigate();
  const { loading, error } = GetUserData();
  
  const dispatch = useDispatch();

  const { progress, resetProgress, updateInterval } = useEnterAccountNavigate(loadingForm);

  const { dispatchInstagramAccount } = useUserData();

  
  const [nickname, setNickname] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setNickname(value)
  }

  const closePopup = () => {
    setPopupType(null);
    dispatch(setError(null));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchInstagramAccount(nickname)
    setLoadingForm(true)
  };

  useEffect(() => {
    if(!loading && progress === 100){
      setLoadingForm(false)
      resetProgress()
      navigate("/account-information")
    }
    if(error){
      setLoadingForm(false)
      resetProgress()
      if(error === "Your account is private") {setPopupType("privateAccount")}
      if(error === "Account not found") {setPopupType("accountNotFound")}
      if(error === "Something went wrong...") {setPopupType("somethingWentWrong")}
      if(error === "ThrottlerException: Too Many Requests") {setPopupType("somethingWentWrong")}
    }
  }, [loading, progress, error]);


  return (
    <div className="enter-account-page">
      <div
        className={`enter-account-wrapper ${popupType ? "blur-background" : ""}`}
      >
        {loadingForm ? (
          <AnalysingProfile progress={progress} />
        ) : (
          <GetAnalysis handleSubmit={handleSubmit} nickname={nickname} handleChange={handleChange} showPopup={setPopupType} />   
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
