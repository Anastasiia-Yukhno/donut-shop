import React from 'react';
import { Header } from '../../components';
import { links } from '../../contsts';
import { Container } from './Favorites.styles';

const Favorites = () => {
  return (
    <Container>
      <Header
        links={links}
      />

      <h1>Favorites</h1>
    </Container>
  )
};

export default Favorites;
