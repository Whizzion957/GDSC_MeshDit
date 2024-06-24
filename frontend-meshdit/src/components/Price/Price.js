import React from 'react'

export default function Price({price,local, currency}) {
    const formatPrice = () => 
        new Intl.NumberFormat(local, {
            style: 'currency',
            currency,
        }).format(price);
  return (
    <span>{formatPrice()}</span>
  )
}

Price.defaultProps = {
    local: 'en-US',
    currency: 'INR',
};
