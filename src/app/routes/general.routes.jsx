import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { OnBoardingNavigationPage, OnBoardingPage, UsernameEnterPage } from "../../pages"

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/main" exact element={<OnBoardingPage />} />
      <Route path="/onboarding" exact element={<OnBoardingNavigationPage />} />
      <Route path="/user-enter" exact element={<UsernameEnterPage />} />
      <Route path="/*" element={<Navigate replace to="/main" />} />
    </Routes>
  )
}
