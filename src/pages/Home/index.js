import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Link className="link" to="/vaccines">
        Go to vaccines
      </Link>
    </Container>
  );
}

export default Home;
