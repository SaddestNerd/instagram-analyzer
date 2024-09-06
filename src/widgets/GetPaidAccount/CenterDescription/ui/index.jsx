
import React, { useState, useRef, useEffect } from "react"
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
import { useRecurly, useCheckoutPricing } from "@recurly/react-recurly"
import usePaymentData from "../../../../shared/lib/hooks/payment/payment.hook"
import GetPaymentData from "../../../../shared/lib/hooks/payment/paymentSelector.hook"
import { useNavigate } from 'react-router-dom';

const CenterDescription = ({ onActiveModal, scrollToOffer, isAppleDevice }) => {
  const [openForm, setOpenForm] = useState(false)
  const offerRef = useRef(null)
  const recurly = useRecurly()
  const { dispatchPlan, dispatchCurrency } = usePaymentData();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedPlan, setSelectedPlan] = useState("plan-code");

  scrollToOffer.current = () => {
    offerRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const [errorLabel, setErrorLabel] = useState(null)
  const { subscribe } = usePaymentData();
  const { loading, registerToken, error, currency, plan } = GetPaymentData();
  const formRef = useRef()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    recurly.token(formRef.current, async (err, token) => {
      if (err) {
        console.log(err)
      } else {
        subscribe(formData.email, formData.firstName, formData.lastName, token.id);
      }
    });

  };

  useEffect(() => {
    setErrorLabel(error)
  }, [error])

  useEffect(() => {
    if (registerToken) {
      if (!loading) {
        navigate(`/account-create?token=${registerToken}`);
      }
    }
  }, [registerToken, navigate, loading])

  const changeHandlerData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    setErrorLabel(null)
  }

  useEffect(() => {

    dispatchPlan();
    dispatchCurrency();
  }, []);

  useEffect(() => {
  
    if (plan) {
      setSelectedPlan(plan.planCode);
    }
    if (currency) {
      setSelectedCurrency(currency.currencyCode);
    }
  }, [plan, currency]);

  const [{ price, loading: pricingLoading }, setCheckoutPricing] =
    useCheckoutPricing({
      subscriptions: [
        {
          plan: selectedPlan,
        },
      ],
      currency: selectedCurrency,
    });


  if (pricingLoading) return <></>


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

        <p className="title24-semibold-outfit" ref={offerRef}>
          Limited time special offer
        </p>
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
              <div className="purple">{price.currency.symbol}{price.next.total}</div>
              <div className="black">{price.currency.symbol}{price.now.total}</div>
            </div>
          </div>
          <div className="second-line">
            <div className="left title20-semibold-outfit">Total Today</div>
            <div className="right title20-semibold-outfit">{price.currency.symbol}{price.now.total}</div>
          </div>
        </div>
        {openForm ? <RegisterPayment formRef={formRef} changeHandlerData={changeHandlerData} handleSubmit={handleSubmit} formData={formData} /> : <></>}
      </div>
      {errorLabel && (<p className="title14-regular-urbanist error-message error-center">
        {errorLabel}
      </p>)}
      <div className="pay-wrapper">
        {openForm ?
          <DefaultButton text={"Process credit card"} onClick={handleSubmit} /> :
          <DefaultButton text={"Get my plan"} onClick={() => { setOpenForm(!openForm) }} />}

        <div className="or-wrapper title11-regular-outfit">OR</div>
        <MobilePayButton type={isAppleDevice ? "apple" : "google"} onClick={onActiveModal} />
      </div>
    </div>
  )
}

export default CenterDescription
