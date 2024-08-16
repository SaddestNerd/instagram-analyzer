import React from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
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
  NewsArticle1,
  NewsArticle2,
  NewsArticle3,
  NewsArticle4,
  NewsArticle5,
} from "../../pages"
import { AccountFooter, AccountHeader } from "../../widgets"
import ScrollToTop from "../../shared/lib/hooks/useScrollToTop"

export const useRoutes = () => {
  const AccountHeaderFooter = ({ element, isLogo }) => {
    const location = useLocation()
    const hasNextUpdate = location.pathname === "/account-analytics"
    return (
      <>
        <AccountHeader isLogo={isLogo} />
        {element}
        <AccountFooter hasNextUpdate={hasNextUpdate} />
      </>
    )
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/main" exact element={<OnBoardingPage />} />
        <Route
          path="/onboarding"
          exact
          element={<OnBoardingNavigationPage />}
        />
        <Route path="/user-enter" exact element={<UsernameEnterPage />} />
        <Route path="/get-account" exact element={<GetPaidAccountPage />} />
        <Route path="/account-create" exact element={<AccountCreatingPage />} />
        <Route path="/enter-account" exact element={<EnterAccountPage />} />

        <Route
          path="/account-information"
          exact
          element={
            <AccountHeaderFooter
              isLogo={true}
              element={<AccountInformationPage />}
            />
          }
        />
        <Route
          path="/account-analytics"
          exact
          element={<AccountHeaderFooter element={<AnalyticsPage />} />}
        />
        <Route
          path="/insights"
          exact
          element={<AccountHeaderFooter element={<InsightsPage />} />}
        />
        <Route
          path="/news"
          exact
          element={<AccountHeaderFooter element={<NewsPage />} />}
        />
        <Route
          path="/news-article-1"
          exact
          element={<AccountHeaderFooter element={<NewsArticle1 />} />}
        />
        <Route
          path="/news-article-2"
          exact
          element={<AccountHeaderFooter element={<NewsArticle2 />} />}
        />
        <Route
          path="/news-article-3"
          exact
          element={<AccountHeaderFooter element={<NewsArticle3 />} />}
        />
        <Route
          path="/news-article-4"
          exact
          element={<AccountHeaderFooter element={<NewsArticle4 />} />}
        />
        <Route
          path="/news-article-5"
          exact
          element={<AccountHeaderFooter element={<NewsArticle5 />} />}
        />
        <Route path="/login" exact element={<LoginRestorePage />} />
        <Route path="/*" element={<Navigate replace to="/main" />} />
      </Routes>
    </>
  )
}
