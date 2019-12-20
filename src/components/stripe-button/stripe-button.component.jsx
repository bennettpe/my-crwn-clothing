// Stripe Button Component
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Get Stripe Config 
const config = require('../../config')

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name={config.stripe.name}
        billingAddress
        shippingAddress
        image={config.stripe.image}
        currency="GBP"
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={config.stripe.publishableKey}
        />
    );
};

export default StripeCheckoutButton;
