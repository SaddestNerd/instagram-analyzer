import React from "react"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import {
  OnBoardingNavigationPage,
  OnBoardingPage,
  UsernameEnterPage,
  GetPaidAccountPage,
  AccountCreatingPage,
  EnterAccountPage,
  LoginRestorePage,
  AccountInformationPage,
  AnalyticsPage,
  InsightsPage,
  NewsPage,
  NewsArticle,
} from "../../pages"
import { AccountFooter, AccountHeader } from "../../widgets"

export const useRoutes = () => {
  const AccountHeaderFooter = ({ element, isLogo }) => {
    return (
      <div className="flex-box">
        <AccountHeader isLogo={isLogo} />
        {element}
        <AccountFooter />
      </div>
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
        element={<AccountHeaderFooter isLogo={true} element={<AccountInformationPage />} />}
      />
      <Route
        path="/account-analytics"
        exact
        element={<AccountHeaderFooter element={<AnalyticsPage />} />}
      />
      <Route
        path="/insights"
        exact
        element={<AccountHeaderFooter  element={<InsightsPage />} />}
      />
      <Route
        path="/news"
        exact
        element={<AccountHeaderFooter element={<NewsPage />} />}
      />
      <Route
        path="/news-article"
        exact
        element={<AccountHeaderFooter element={< NewsArticle/>} />}
      />
      <Route path="/login" exact element={<LoginRestorePage />} />
      <Route path="/*" element={<Navigate replace to="/main" />} />
    </Routes>
  )
}
