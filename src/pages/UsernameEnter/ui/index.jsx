import React, { useState } from "react"
import "./usernameEnter.scss"
import { InstagramAccount, Searching } from "../../../widgets"
import { Link } from "react-router-dom"
import useUsernameEnter from "../model/useUsernameEnter"

const UsernameEnterPage = () => {
  const [currentForm, setCurrentForm] = useState(0)
  const { progress, navigate } = useUsernameEnter(currentForm)

  const nextForm = () => {
    setCurrentForm(1)
  }

  return (
    <div
      className={`username-enter-wrapper ${currentForm === 0 ? "background-pic5" : "background-pic6"}`}
    >
      {currentForm === 0 ? (
        <InstagramAccount nextForm={nextForm} />
      ) : navigate ? (
        <Link to="/main" />
      ) : (
        <Searching progress={progress} />
      )}
    </div>
  )
}

export default UsernameEnterPage
