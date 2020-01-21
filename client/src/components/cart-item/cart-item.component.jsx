// Cart Item Conponent
import React from 'react';

import {
  CartItemContainer, 
  ItemDetailContainer, 
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailContainer>
      <span>{name}</span>
      <span>
        {quantity} x £{price}
      </span>
    </ItemDetailContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);