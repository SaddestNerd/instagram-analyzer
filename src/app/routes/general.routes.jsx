import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import {
  OnBoardingNavigationPage,
  OnBoardingPage,
  UsernameEnterPage,
  GetPaidAccountPage,
  AccountCreatingPage,
  EnterAccountPage,
  LoginRestorePage,
  AccountInformation,
} from "../../pages"
import { AccountFooter, AccountHeader } from "../../widgets"

export const useRoutes = () => {
  const AccountHeaderFooter = ({ element }) => {
    return (
      <>
        <AccountHeader />
        {element}
        <AccountFooter />
      </>
    )
  }

  return (
    <Routes>
      <Route path="/main" exact element={<OnBoardingPage />} />
      <Route path="/onboarding" exact element={<OnBoardingNavigationPage />} />
      <Route path="/user-enter" exact element={<UsernameEnterPage />} />
      <Route path="/get-account" exact element={<GetPaidAccountPage />} />
      <Route path="/account-create" exact element={<AccountCreatingPage />} />
      <Route path="/enter-account" exact element={<EnterAccountPage />} />

      <Route
        path="/account-information"
        exact
        element={<AccountHeaderFooter element={<AccountInformation />} />}
      />
      <Route path="/login" exact element={<LoginRestorePage />} />
      <Route path="/*" element={<Navigate replace to="/main" />} />
    </Routes>
  )
}
