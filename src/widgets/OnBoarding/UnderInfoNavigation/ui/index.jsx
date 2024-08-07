import React from "react"
import "./underInfoNavigation.scss"
import { StartNavigation } from "../../../../features"
import NavigationSteps from "../../NavigationSteps/ui"

const UnderInfoNavigation = ({
  title,
  description,
  buttonText,
  nextForm,
  currentStep,
  totalSteps,
  onStepChange,
  isLastForm,
}) => {
  return (
    <div className="onboarding-navigation-section">
      <div className="onboarding-navigation-block">
        <p className="title30-semibold-outfit">{title}</p>
        <p className="title16-regular-outfit">{description}</p>
        <NavigationSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStepChange={onStepChange}
        />
        <StartNavigation
          text={buttonText}
          onClick={nextForm}
          link={isLastForm ? "/main" : "/onboarding"}
        />
      </div>
    </div>
  )
}

export default UnderInfoNavigation
