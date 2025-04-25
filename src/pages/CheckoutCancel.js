import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutCancel() {

    return (
        <div>
            <h1>Payment Cancelled</h1>
            <p>Your payment was cancelled. You can return to the store and try again.</p>
            <Link to="/"><button>Back to store.</button></Link>
        </div>
    );
}