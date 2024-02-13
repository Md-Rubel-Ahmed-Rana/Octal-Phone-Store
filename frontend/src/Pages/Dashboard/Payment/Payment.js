import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const phone = useLoaderData();
    const stripePromise = loadStripe('pk_test_51M5wpFGyVf5jkl9QTtkwnZmOVKTZRkaSAxWuJmIxmgn4WtP42dMUk0cW3zSScgA2hRSeqWZbKyocHoP0AwFpTFOX005OcSsQf1');

    return (
        <div>
            {
                phone.phoneName ? <h4 className='text-3xl font-bold'>Payment for: {phone.phoneName}</h4> : ""
            }
            <p className='text-2xl'>Please pay <strong>{phone.price}</strong> for your Phone.</p>
            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm phone={phone} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;