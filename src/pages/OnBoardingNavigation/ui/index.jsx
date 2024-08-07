import React, { useState } from "react"
import "./onBoardingNavigation.scss"
import { UnderInfoNavigation } from "../../../widgets"
import { onboardingForms } from "../../../shared/model/onboardingModel"

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
        title={onboardingForms[currentForm].title}
        description={onboardingForms[currentForm].description}
        buttonText={onboardingForms[currentForm].buttonText}
        nextForm={nextForm}
        currentStep={currentForm}
        totalSteps={onboardingForms.length}
        onStepChange={setCurrentForm}
        isLastForm={currentForm === onboardingForms.length - 1}
      />
    </div>
  )
}

export default OnBoardingNavigationPage
