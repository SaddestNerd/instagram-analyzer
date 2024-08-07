import React from "react"
import "./navigationSteps.scss"

const NavigationSteps = ({ currentStep, totalSteps, onStepChange }) => {
  return (
    <div className="onboarding-navigation-steps">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`step-dot ${currentStep === index ? "active" : ""}`}
          onClick={() => onStepChange(index)}
        />
      ))}
    </div>
  )
}

export default NavigationSteps
