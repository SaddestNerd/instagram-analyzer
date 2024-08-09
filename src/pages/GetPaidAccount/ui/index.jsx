import React, { useState } from "react"
import "./usernameEnter.scss"
import {
  Discount,
} from "../../../shared/lib/icons/icons"
import { CenterDescription, FooterInformation, Timer, TimerBlock } from "../../../widgets"
import {

  DefaultButton,

} from "../../../shared"
import { PayWindow } from "../../../features"

const UsernameEnterPage = () => {
  const [activeMobalWindow, setActiveModalWindow] = useState(true);

  return (



    <div className={`get-paid-account`}>
      <div className="background-wrapper"></div>
      <TimerBlock/>
      <CenterDescription onActiveModal={() => (setActiveModalWindow(true))}/>
      <FooterInformation/>
      <div className={"upper-window-background" + (activeMobalWindow ? " is-active" : " ")} onClick={() => (setActiveModalWindow(false))} >
        <PayWindow svg={"apple"}/>
      </div>
    </div>
  )
}

export default UsernameEnterPage
