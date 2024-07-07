import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import React, { useEffect } from 'react'
import { useLoading } from '../../hooks/useLoading';
import { pay } from '../../services/orderService';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function PaypalButtons({order}) {
  return (
    <PayPalScriptProvider options={{
        clientId: 'AdlRZ-t883iSykK8IZRKEuPr04QjN6WTIPnYHJ6vJOL44eaeHYI_gY2bRLq_UIXAZojiibdZ1NecihIX'
    }}>
        <Buttons order={order} />
    </PayPalScriptProvider>
  )
}

function Buttons({order}) {
    const navigate = useNavigate();
    const { clearCart } = useCart();
    const [{isPending}] = usePayPalScriptReducer();
    const { showLoading, hideLoading } = useLoading();
    useEffect (() => {
        isPending ? showLoading() : hideLoading();
    });

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount : {
                        currency_code: 'INR',
                        value: order.totalPrice,
                    },
                },
            ],
        });
    };

    const onApprove = async (data, actions) => {
        try {
            const payment = await actions.order.capture();
            const orderID = await  pay(payment._id);
            clearCart();
            toast.success('Payment Saved Successfully', 'Success');
            navigate('/track/' + orderID);
        }
        catch (error) {
            toast.error('Payment Failed', 'Error');
        }
    };

    const onError = err => {
        toast.error('Payment Failed', 'Error');
    };

    return (
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
    );
}
