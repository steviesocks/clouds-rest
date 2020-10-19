import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import logo from '../../assets/CloudsRestLogo-grey.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51HJKL7E9WVC2Ygw4zc2AkYFndCRO53n7BPuaIbg2tA63otNp6oAdhJ4aYGKtHtxPQLVNL9wFN8o6WXDjoyn7QiBm00Mek8TeaH';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceInCents,
                token
            }
        }).then(response => {
            alert('Test Payment Successful!')
        }).catch(error => {
            console.log('payment error', JSON.parse(error));
            alert(
                'There was an issue with your test payment. Please use the test card provided.'
            )
        })
    }

    return (
        <StripeCheckout className='stripe-checkout'
            label='Pay With Card'
            name='Clouds Rest Outfitters'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;