import React, { useState } from "react"
import "./usernameEnter.scss"
import { InstagramAccount } from "../../../widgets"
import { onboardingForms } from "../../../shared/model/instargamEnter"

const UsernameEnterPage = () => {
    const [currentForm, setCurrentForm] = useState(0)
  
    const nextForm = () => {
      if (currentForm < onboardingForms.length - 1) {
        setCurrentForm((prev) => prev + 1)
      }
    }
  
    return (
      <div
        className={`username-enter-wrapper ${onboardingForms[currentForm].className1}`}
      >
        <InstagramAccount
          // title={onboardingForms[currentForm].title}
          // description={onboardingForms[currentForm].description}
          // buttonText={onboardingForms[currentForm].buttonText}
          // nextForm={nextForm}
          // currentStep={currentForm}
          // totalSteps={onboardingForms.length}
          // onStepChange={setCurrentForm}
          // isLastForm={currentForm === onboardingForms.length - 1}
        />
      </div>
    )
  }


export default UsernameEnterPage