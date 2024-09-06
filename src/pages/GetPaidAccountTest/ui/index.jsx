import React, { useState, useRef, useEffect} from "react"
import "./getPaidAccount.scss"
import {
  CardElement,
  useRecurly,
  useCheckoutPricing,
} from "@recurly/react-recurly"

const GetPaidAccountPage = () => {
  //4111111111111111
  //11 / 2027

  const BACKEND_URL = "http://localhost:5000"
  // const BACKEND_URL = "https://analyser-tmp.onrender.com"
  // const PLAN = "test-plan-code"
  const PLAN = "plan-code"

  //General
  const googlePayButtonRef = useRef(null)
  // const applePayButtonRef = useRef(null)
  const formRef = useRef()
  const recurly = useRecurly()

  const [currencies, setCurrencies] = useState(["USD"])
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [amount, setAmount] = useState(0)
  const [symbol, setSymbol] = useState("")
  // const [loading, setLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "volodymyr.bukhalo312124214124@gmail.com",
  })

  const [{ price, loading: pricingLoading }, setCheckoutPricing] =
    useCheckoutPricing({
      subscriptions: [
        {
          plan: PLAN,
        },
      ],
      currency: selectedCurrency,
    })

  const changeHandlerData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/payment/currency`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming data.data contains the array of currency codes
        const currenciesArray = data.currency || [];
  
        if (currenciesArray.length > 0) {
          const initialCurrency = currenciesArray[0]; // Or whichever logic determines the default
  
          setCurrencies(currenciesArray);
          setSelectedCurrency(initialCurrency);
          setCheckoutPricing({
            subscriptions: [
              {
                plan: PLAN,
              },
            ],
            currency: initialCurrency,
          });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [setCheckoutPricing]);

  useEffect(() => {
    if (!loading) {
      setCheckoutPricing({
        subscriptions: [
          {
            plan: PLAN,
          },
        ],
        currency: selectedCurrency,
      })
    }
  }, [selectedCurrency, setCheckoutPricing, loading])

  useEffect(() => {
    if (price && price.now && price.currency) {
      if (amount !== price.now.subtotal) {
        setAmount(price.now.subtotal)
      }
      if (symbol !== price.currency.symbol) {
        setSymbol(price.currency.symbol)
      }
    }
  }, [price])

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value)
  }

  //Card
  const handleSubmitCard = (event) => {
    if (event.preventDefault) event.preventDefault()
    recurly.token(formRef.current, async (err, token) => {
      if (err) {
        console.log("[error]", err)
      } else {
        console.log("[token]", token.id)
        await fetch(`${BACKEND_URL}/api/payment/subscribe-with-card`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tokenId: token.id,
            email: formData.email,
            lastName: formData.lastName,
            firstName: formData.firstName,
            currency: selectedCurrency,
          }),
        })
      }
    })
  }

  //G-Pay
  const handlePaymentGoogleAuthorized = async (paymentData) => {
    const { recurlyToken: token } = paymentData
    console.log({ paymentData })
    // const name = splitName(
    //   paymentData.paymentMethodData.info.billingAddress.name
    // )

    console.log(
      "Google Pay succeeded.",
      "Token:",
      token.id,
      "PaymentData:",
      paymentData.paymentMethodData.info.billingAddress.name
    )

    await fetch(`${BACKEND_URL}/api/payment/subscribe-with-google-pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenId: token.id,
        email: formData.email,
        name: paymentData.paymentMethodData.info.billingAddress.name,
        currency: selectedCurrency,
      }),
    })
  }

  useEffect(() => {
    if (!loading) {
      const googlePay = recurly.GooglePay({
        currency: selectedCurrency,
        country: "US",
        total: amount.toString(),
        googleMerchantId: "5427781066",
        billingAddressRequired: true,
        callbacks: {
          onPaymentAuthorized: handlePaymentGoogleAuthorized,
        },
      })

      googlePay.on("ready", (googlePayButton) => {
        const container = document.getElementById("google-pay-button-container")
        if (googlePayButtonRef.current) {
          googlePayButtonRef.current.remove()
        }
        if (container) {
          container.appendChild(googlePayButton)
          googlePayButtonRef.current = googlePayButton
        }
      })

      googlePay.on("error", (err) => {
        console.error("Google Pay error", err)
      })

      return () => {
        googlePay.off("ready")
        googlePay.off("error")

        if (googlePayButtonRef.current) {
          googlePayButtonRef.current.remove()
        }
      }
    }
  }, [amount, selectedCurrency, loading])

  // Apple Pay
  useEffect(() => {
    if (!loading) {
      const applePay = recurly.ApplePay({
        country: "US",
        currency: selectedCurrency,
        label: "My Subscription",
        total: amount.toString(),
        callbacks: {
          onPaymentAuthorized: handlePaymentAuthorized,
        },
      })

      applePay.ready(() => {
        const applePayButton = document.getElementById("my-apple-pay-button")
        if (applePayButton) {
          applePayButton.addEventListener("click", () => {
            applePay.begin()
          })
        }
      })

      applePay.on("error", (err) => {
        console.error("Apple Pay error", err)
      })

      return () => {
        applePay.off("error")
      }
    }
  }, [amount, selectedCurrency, loading])

  const handlePaymentAuthorized = async ({ payment }) => {
    const { recurlyToken: token, billingContact, shippingContact } = payment

    console.log(
      "Apple Pay succeeded.",
      "Token:",
      token.id,
      "Billing Contact:",
      billingContact,
      "Shipping Contact:",
      shippingContact
    )

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/payment/subscribe-with-apple-pay`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tokenId: token.id,
            email: formData.email,
            familyName: billingContact.familyName,
            givenName: billingContact.givenName,
            currency: selectedCurrency,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to process the payment")
      }
    } catch (error) {
      console.error("Payment processing error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmitCard} ref={formRef}>
      <div>
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        {loading || pricingLoading ? (
          <p>Loading...</p>
        ) : (
          <p>
            Price: {amount} {symbol}
          </p>
        )}
      </div>
      <div>
        <input
          data-recurly="first_name"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandlerData}
        />
        <input
          data-recurly="last_name"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandlerData}
        />
        <input
          data-recurly="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={changeHandlerData}
        />
      </div>
      <CardElement onSubmit={handleSubmitCard} />
      <div>
        <button>Pay</button>
        <div id="google-pay-button-container" />
        <button id="my-apple-pay-button">Apple Pay</button>
      </div>
    </form>
  )
}

export default GetPaidAccountPage
