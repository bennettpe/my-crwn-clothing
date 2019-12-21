// Stripe Button Component
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_d2OZnfBPidFESKxna5XWGXWy00ZWmHBclp';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name="MY CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        currency="GBP"
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
