import React from 'react'
import classes from './price.module.css';

export default function Price({price,local, currency}) {
    const formatPrice = () => 
        new Intl.NumberFormat(local, {
            style: 'currency',
            currency,
        }).format(price);
  return (
    <span className={classes.price}>{formatPrice()}</span>
  )
}

Price.defaultProps = {
    local: 'en-US',
    currency: 'INR',
};
