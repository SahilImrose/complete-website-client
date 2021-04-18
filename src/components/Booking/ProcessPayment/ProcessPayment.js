import React, { createContext, useState } from 'react'
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';

export const PaymentContext = createContext();

const stripePromise = loadStripe('pk_test_51IeDaTJ6naT3PgbPPwUv6RtUhS2gIRLdRsUc19k7aVB78APpjU4ejP1QxuszSYtzwk6dvzrmng8IIVQehmZP6HvC004DQNwp2s');

const ProcessPayment = ({handlePayment}) => {
  const [payment, setPayment] = useState(null)
  return (
    <PaymentContext.Provider value={[payment, setPayment]}>
    <Elements stripe={stripePromise}>
      <SimpleCardFrom handlePayment={handlePayment}></SimpleCardFrom>
    </Elements></PaymentContext.Provider>
  );
};
export default ProcessPayment;