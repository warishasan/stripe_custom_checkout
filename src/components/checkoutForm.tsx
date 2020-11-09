import React from "react"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';



const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};


export default function CheckoutForm() {


  const stripe = useStripe();
  const elements = useElements()


  const submitHandle = async() =>{


    const response = await fetch("/.netlify/functions/checkout",{method: "post"})
    const data = await response.json()
    console.log(data)

    const result = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
          email: "wariss@gmail.com",          
        },
        metadata: {yolo:"polo"}
      }
    
    })

    console.log(result)
    
  }
  
  
  return <div>Hello world!

  
  <CardElement options={CARD_ELEMENT_OPTIONS} />

  <button onClick = {submitHandle}></button>


  </div>
}
