import React, { useState } from "react"
import "./usernameEnter.scss"
import {
  BGCost,
  Discount,
  Emoji1,
  Emoji2,
  Emoji3,
  Emoji4,
  Emoji5,
  Emoji6,
  Emoji7,
  Emoji8,
  Emoji9,
  GooglePayBig,
} from "../../../shared/lib/icons/icons"
import { EmojiBlock, PayWindow, Timer } from "../../../widgets"
import {
  ApplePayButton,
  CVCInput,
  DefaultButton,
  DefaultInput,
  GooglePayButton,
  YearMonthInput,
} from "../../../shared"

const UsernameEnterPage = () => {
  return (
    <div className={`get-paid-account`}>
      <div className="background-wrapper"></div>
      <div className="upper-wrapper">
        <div className="svg-wrapper">
          <Discount />
        </div>
        <p className="upper-big-text">Time limited sale</p>
        <p className="upper-little-text">Grab the deal before it’s too late!</p>
        <Timer />
        <DefaultButton text={"Get Follow Stats: Profile Analyzer"} />
      </div>
      <div className="under-wrapper">
        <div className="under-wrapper-flex">
          <p className="title24-semibold-outfit">
            We’ve successfully analyzed 17% of your profile
          </p>
          <p className="title16-regular-outfit">
            Get full analysis to view more accurate & detailed analysis of your
            profile.
          </p>

          <div className="emoji-wrapper-grid">
            <EmojiBlock text={"Secret fans"} emoji={Emoji1} />
            <EmojiBlock text={"Secret fans"} emoji={Emoji2} />
            <EmojiBlock text={"Secret fans"} emoji={Emoji3} />
            <EmojiBlock text={"Secret fans"} emoji={Emoji4} />
            <EmojiBlock text={"Secret fans"} emoji={Emoji5} />
            <EmojiBlock text={"Secret fans"} emoji={Emoji6} />
            <EmojiBlock text={"Secret fans"} emoji={Emoji7} />
            <EmojiBlock text={"Secret fans"} emoji={Emoji8} />
          </div>

          <p className="title24-semibold-outfit">Limited time special offer</p>
          <p className="title16-regular-outfit">
            Complete your profile and get valuable insights today!
          </p>

          <div className="offer-wrapper">
            <div className="offer-header">
              <img className="background" src={BGCost} alt="" />
              <p className="title20-semibold-outfit">SPECIAL OFFER</p>
            </div>
            <div className="first-line">
              <div className="left title16-regular-outfit">3-Day Trial</div>
              <div className="right title16-regular-outfit">
                <div className="purple">$9.99</div>
                <div className="black">$1.00</div>
              </div>
            </div>
            <div className="second-line">
              <div className="left title20-semibold-outfit">Total Today</div>
              <div className="right title20-semibold-outfit">$1.00</div>
            </div>
          </div>
          <div className="form-element">
            <div className="form-wrapper">
              <DefaultInput
                text={"First name"}
                placeholder={"Enter your first name"}
              />
              <DefaultInput
                text={"Last name"}
                placeholder={"Enter your last name"}
              />
              <DefaultInput text={"Email"} placeholder={"Enter your email"} />
            </div>
          </div>
          <div className="form-element">
            <p className="title18-semibold-outfit text-element">Credit card</p>
            <div className="form-wrapper">
              <DefaultInput
                text={"Card number"}
                placeholder={"XXXX XXXX XXXX XXXX"}
              />
              <div className="form-flex">
                <YearMonthInput />
                <CVCInput />
              </div>
            </div>
          </div>
        </div>
        <div className="pay-wrapper">
          <DefaultButton text={"get my plan"} />
          <div className="or-wrapper title11-regular-outfit">OR</div>
          <ApplePayButton />
          {/* <GooglePayButton/> */}
        </div>
      </div>

      <div className="footer-flex-wrapper">
        <div className="text-wrapper">
          <p className="title11-regular-outfit">
            *Your 3-Day Trial will last until (July 6, 2024). You can cancel
            anytime before then and will not be charged the full program amount.
          </p>
          <p className="title11-regular-outfit">
            No question asked, no small print. If you decide MetricMaster:
            Profile Analyzer is good for you, on (July 6, 2024) you will be
            charged one payment for $19.99 for your 7 days course ($2.86/day).
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
            <span className="title14-semibold-outfit">here</span>
          </p>
        </div>
        <div className="contact-background-wrapper">
          <div className="contact-information-wrapper title14-regular-outfit">
            Rua Nove 1424, Jaboatão Dos Guararapes, Pernambuco 54240-080, Brazil
            <span className="purple-text"> support@followstats.app</span>
          </div>
        </div>
        <ul className="footer-nav">
          <li className="title14-semibold-outfit">Privacy Policy</li>
          <li className="title14-semibold-outfit">Terms of use</li>
        </ul>
      </div>

      {/* <div className="upper-window-background">
        <PayWindow svg={"apple"}/>
      </div> */}
    </div>
  )
}

export default UsernameEnterPage
