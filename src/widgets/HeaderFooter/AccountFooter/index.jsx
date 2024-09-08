import React from "react"
import "./accountFooter.scss"
import { Icon } from "../../../shared"
import { Link } from "react-router-dom"
import GetInstagamData from "../../../shared/lib/hooks/instagram/instagramSelector.hook"

const AccountFooter = ({ hasNextUpdate }) => {


  const { loading, error } = GetInstagamData()

  return (
    <div
      className={`account-footer ${loading || error ? "null-margin" : ""} ${hasNextUpdate ? "with-next-update" : ""}`}
    >
      <Icon type="logo" alt="logo" width={64} height={64}></Icon>
      <ul className="flex-footer-menu">
        <li className="title16-medium-urbanist">
          <Link rel="noopener noreferrer" to="/account-analytics">
            Analytics
          </Link>
        </li>
        <li className="title16-medium-urbanist">
          <Link rel="noopener noreferrer" to="/insights">
            Insights
          </Link>
        </li>
        <li className="title16-medium-urbanist">
          <Link rel="noopener noreferrer" to="/news">
            News
          </Link>
        </li>
      </ul>
      <ul className="flex-footer-menu">
        <li className="title12-medium-urbanist">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to={"/terms-of-servise"}
          >
            Terms of Servise
          </Link>
        </li>
        <li className="title12-medium-urbanist">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to={"/privacy-policy"}
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AccountFooter
