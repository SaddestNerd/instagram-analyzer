import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { MainPage } from "../../pages"

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/onboarding" exact element={<MainPage />} />
      <Route path="/*" element={<Navigate replace to="/onboarding" />} />
    </Routes>
  )
}
