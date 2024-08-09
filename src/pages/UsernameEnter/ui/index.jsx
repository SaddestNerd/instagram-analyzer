import React, { useState } from "react"
import "./usernameEnter.scss"
import { InstagramAccount, Searching } from "../../../widgets"
import { useNavigate } from "react-router-dom"
import useUsernameEnter from "../model/useUsernameEnter"

const UsernameEnterPage = () => {
  const [currentForm, setCurrentForm] = useState(0)
  const navigate = useNavigate()
  const { progress } = useUsernameEnter(currentForm, navigate)

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

export default UsernameEnterPage
