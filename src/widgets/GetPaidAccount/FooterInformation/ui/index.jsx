import React from "react"
import "./footerInformation.scss"

import { Emoji9 } from "../../../../shared/lib/icons/icons"
import { Link } from "react-router-dom"

const FooterInformation = () => {
  return (
    <div className="footer-flex-wrapper">
      <div className="text-wrapper">
        <p className="title11-regular-outfit">
          *Your 3-Day Trial will last until (July 6, 2024). You can cancel
          anytime before then and will not be charged the full program amount.
        </p>
        <p className="title11-regular-outfit">
          No question asked, no small print. If you decide MetricMaster: Profile
          Analyzer is good for you, on (July 6, 2024) you will be charged one
          payment for $19.99 for your 7 days course ($2.86/day).
        </p>
        <p className="title11-regular-outfit">
          MetricMaster: Profile Analyzer will automatically charge your card
          $19.99 every 7 days so you don't lose access to your account. No
          refunds or credits except if you don't see results and follow our
          money-back policy. To cancel, simply let us know by email:
          support@followersreport.com
        </p>
      </div>
      <div className="flex-question">
        <div className="emoji-wrapper">
          <img className="emoji" src={Emoji9} alt="emoji" />
        </div>
        <p className="title14-regular-outfit">
          Have a questions? Reach our friendly support team{" "}
          <a
            href=" mailto:support@followstats.app"
            className="title14-semibold-outfit"
          >
            here
          </a>
        </p>
      </div>
      <div className="contact-background-wrapper">
        <div className="contact-information-wrapper title14-regular-outfit">
          Rua Nove 1424, Jaboatão Dos Guararapes, Pernambuco 54240-080, Brazil
          <span className="purple-text"> support@followstats.app</span>
        </div>
      </div>
      <ul className="footer-nav">
        <li className="title14-semibold-outfit">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to={"/privacy-policy"}
          >
            Privacy Policy
          </Link>
        </li>
        <li className="title14-semibold-outfit">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to={"/terms-of-servise"}
          >
            Terms of Servise
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterInformation
