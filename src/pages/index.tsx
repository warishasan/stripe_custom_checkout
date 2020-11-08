import React from "react"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkoutForm'

const stripePromise = loadStripe("pk_test_51Hl9snA3vShR6sxFtrQm5dumrUVHumFcyfUtCxxO6So6xIBop8jvDQXj2Jd4zB2j5KLBeI9Z6uC4mFNHw0B9ZEEU00q3sDSxsN");





export default function Home() {


  
  
  return <div>Hello world!

  <Elements stripe = {stripePromise}>
    <CheckoutForm/>
  </Elements>

  </div>
}
