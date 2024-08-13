import React, { useState } from "react"
import "./accountHeader.scss"
import { Icon } from "../../../shared"
import { MenuIcon } from "../../../shared/lib/icons/icons"
import { HeaderMenu } from "../../../features"

const CreateAcc = () => {
  const [headerOpen, setHeaderOpen] = useState(false)
  return (
    <div className="account-header">
      <div className="account-flex">
        <Icon type="logo" alt="logo" width={60} height={60}></Icon>
        <span className="title20-medium-urbanist">Home</span>
        <span
          onClick={() => setHeaderOpen(true)}
          className="menu-icon-background"
        >
          <MenuIcon />
        </span>
      </div>

      <div
        className={"header-blur-background" + (headerOpen ? " isActive" : "")}
      >
        <HeaderMenu
          onClickExit={() => setHeaderOpen(false)}
          headerOpen={headerOpen}
        />
      </div>
    </div>
  )
}

export default CreateAcc
