import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import Header from '../../components/Header';
/* import VaccinesInfos from '../../components/VaccinesInfos'; */

import api from '../../services/api';

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
