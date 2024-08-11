import React, { useState } from "react"
import "./centerDescription.scss"
import { DefaultButton, EmojiBlock, MobilePayButton } from "../../../../shared"
import {
  BGCost,
  Emoji1,
  Emoji2,
  Emoji3,
  Emoji4,
  Emoji5,
  Emoji6,
  Emoji7,
  Emoji8,
} from "../../../../shared/lib/icons/icons"
import { RegisterPayment } from "../../../../features"

const CenterDescription = ({ onActiveModal }) => {
  const [openForm, setOpenForm] = useState(false)

  return (
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
          <EmojiBlock text={"Secret fans"} emoji={Emoji5} />
          <EmojiBlock text={"Blocked you"} emoji={Emoji6} />
          <EmojiBlock text={"Top likers"} emoji={Emoji7} />
          <EmojiBlock text={"Deleted likes"} emoji={Emoji8} />
          <EmojiBlock text={"New followers"} emoji={Emoji1} />
          <EmojiBlock text={"Lost followers"} emoji={Emoji2} />
          <EmojiBlock text={"Top comments"} emoji={Emoji4} />
          <EmojiBlock text={"Deleted comments"} emoji={Emoji3} />
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
        {openForm ? <RegisterPayment /> : <></>}
      </div>
      <div className="pay-wrapper">
        <DefaultButton
          text={openForm ? "Process credit card" : "get my plan"}
          onClick={() => {
            setOpenForm(!openForm)
          }}
        />
        <div className="or-wrapper title11-regular-outfit">OR</div>
        <MobilePayButton type={"google"} onClick={onActiveModal} />
      </div>
    </div>
  )
}

export default CenterDescription
