import React, { useContext, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentContext } from './ProcessPayment';



const SimpleCardFrom = ({handlePayment}) => {

  const [payment, setPayment] = useContext(PaymentContext)

  const stripe = useStripe();
  const [somosa, setSomosa] = useState(null)
  const [hoise, setHoise] = useState(null)
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }


    const cardElement = elements.getElement(CardElement);


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });


    if (error) {
      setSomosa(error.message)
      setHoise(null)
    } else {
      const done = paymentMethod.id;
      setHoise(done)
      setSomosa(null)
      handlePayment(paymentMethod.id) 
    }
  };
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" value="Pay" />
      </form>
      {somosa && <p style={{ color: 'red' }}>{somosa}</p>}
      {hoise && <p style={{ color: 'green' }}>payment accept</p>}
    </div>
  );
};
export default SimpleCardFrom;