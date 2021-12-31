import React from 'react';
import { Header } from '../../components';
import { links } from '../../contsts';
import { Container } from './All.styles';

const All = () => {
  return (
    <Container>
      <Header
        links={links}
      />

      <h1>All</h1>

      <p>Display cards here</p>
    </Container>
  )
};

export default All;
