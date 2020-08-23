import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import logo from '../../assets/clouds-rest-logo.png';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51HJKL7E9WVC2Ygw4zc2AkYFndCRO53n7BPuaIbg2tA63otNp6oAdhJ4aYGKtHtxPQLVNL9wFN8o6WXDjoyn7QiBm00Mek8TeaH';

    const onToken = token => {
        console.log('token', token);
        alert('thank you for your (test) payment')
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