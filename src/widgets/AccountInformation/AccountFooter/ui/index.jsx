import React from "react"
import "./accountFooter.scss"
import { Icon } from "../../../../shared"
import { Link } from "react-router-dom"

const CreateAcc = () => {
  return (
    <div className="account-footer">
      <Icon type="logo" alt="logo" width={64} height={64}></Icon>
      <ul className="flex-footer-menu">
        <li className="title16-medium-urbanist">
          <Link>Analytics</Link>
        </li>
        <li className="title16-medium-urbanist">
          <Link>Insights</Link>
        </li>
        <li className="title16-medium-urbanist">
          <Link>News</Link>
        </li>
      </ul>
      <ul className="flex-footer-menu">
        <li className="title12-medium-urbanist">
          <Link>Analytics</Link>
        </li>
        <li className="title12-medium-urbanist">
          <Link>Insights</Link>
        </li>
      </ul>
    </div>
  )
}

export default CreateAcc
