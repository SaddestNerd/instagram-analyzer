import React, { useState } from "react"
import "./usernameEnter.scss"
import { InstagramAccount, Searching } from "../../../widgets"
import { useNavigate } from "react-router-dom"
import useUsernameEnterNavigate from "../model/useUsernameEnterNavigate"

const UsernameEnter = () => {
  const [currentForm, setCurrentForm] = useState(0)
  const navigate = useNavigate()
  const { progress } = useUsernameEnterNavigate(currentForm, navigate)

  const nextForm = () => {
    setCurrentForm(1)
  }

  return (
    <div
      className={`username-enter-wrapper ${currentForm === 0 ? "background-pic5" : "background-pic6"}`}
    >
      {currentForm === 0 ? (
        <InstagramAccount nextForm={nextForm} />
      ) : (
        <Searching progress={progress} />
      )}
    </div>
  )
}

export default UsernameEnter
