import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const CheckoutForm = ({ phone }) => {
    console.log(phone);
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            return;
        }

        // update unpaid order to paid
        fetch(`https://octal-phone-server.vercel.app/orders/${phone._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ transactionId: paymentMethod.id, id: phone._id })
        })
            .then((res) => res.json())
            .then(() => {
                // delete this paid product
                axios.delete(`https://octal-phone-server.vercel.app/products/delete/${phone.olderId}`)
                    .then((data) => {
                        swal("Congrates!", "Payment completed", "success");
                        navigate("/dashboard/myorders")
                        console.log(data);
                    })

            })
            .catch((err) => console.log(err))
    }
    return (
        <div className='w-96'>
            <form className='my-4' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm my-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;