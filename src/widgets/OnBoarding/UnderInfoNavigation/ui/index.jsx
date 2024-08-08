import React from "react"
import "./underInfoNavigation.scss"
import { StartNavigation } from "../../../../features"
import NavigationSteps from "../../NavigationSteps/ui"

const UnderInfoNavigation = ({
  currentForm,
  nextForm,
  setCurrentForm,
  onboardingForms,
}) => {
  const form = onboardingForms[currentForm]
  const isLastForm = currentForm === onboardingForms.length - 1

  return (
    <div className="onboarding-navigation-section">
      <div className="onboarding-navigation-block">
        <p className="title30-semibold-outfit">{form.title}</p>
        <p className="title16-regular-outfit">{form.description}</p>
        <NavigationSteps
          currentStep={currentForm}
          totalSteps={onboardingForms.length}
          onStepChange={setCurrentForm}
        />
        <StartNavigation
          text={form.buttonText}
          onClick={nextForm}
          link={isLastForm ? "/user-enter" : "/onboarding"}
          typeIcon="arrow"
          widthSize="18"
          heightSize="14"
          altIcon="arrow"
        />
      </div>
    </div>
  )
}

export default UnderInfoNavigation
