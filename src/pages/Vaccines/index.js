import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
/* import VaccinesInfos from '../../components/VaccinesInfos'; */

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Link className="linkVac" to="/">
        Go back
      </Link>
    </Container>
  );
}

export default Home;
