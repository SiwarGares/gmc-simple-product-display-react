import React from 'react';
import product from './product';

const Price = () => {
  return <p>Price: ${product.price}</p>;
};

export default Price;

/*  avec props
import React from 'react';

const Price = ({ price }) => {
  return <p>Price: ${price}</p>;
};

export default Price;  */
