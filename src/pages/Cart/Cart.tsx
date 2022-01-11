import React from 'react';
import { Header } from '../../components';
import { links } from '../../contsts';
import { Container } from './Cart.styles';

const Cart = () => {
  return (
    <Container>
      <Header
        links={links}
      />

      <h1>Cart</h1>
    </Container>
  )
};

export default Cart;
