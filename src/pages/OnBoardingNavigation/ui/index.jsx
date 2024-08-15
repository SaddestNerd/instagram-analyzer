import React, { useState } from "react"
import { UnderInfoNavigation } from "../../../widgets"
import { onboardingForms } from "../model/onboardingModel"
import "./onBoardingNavigation.scss"

const OnBoardingNavigationPage = () => {
  const [currentForm, setCurrentForm] = useState(0)

  const nextForm = () => {
    if (currentForm < onboardingForms.length - 1) {
      setCurrentForm((prev) => prev + 1)
    }
  }

  return (
    <div
      className={`onboarding-navigation-wrapper ${onboardingForms[currentForm].className1}`}
    >
      <UnderInfoNavigation
        currentForm={currentForm}
        nextForm={nextForm}
        setCurrentForm={setCurrentForm}
        onboardingForms={onboardingForms}
      />
    </div>
  )
}

export default OnBoardingNavigationPage
