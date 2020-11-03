import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import Header from '../../components/Header';
import VaccinesInfos from '../../components/VaccinesInfos';

import api from '../../services/api';

import { Container } from './styles';

function Home() {
  const [vaccineData, setVaccineData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await api.get('vaccine');
      const data = response.data;
      setVaccineData(data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Header />
      <Link className="link" to="/">
        Go back
      </Link>
      <section>
        {Object.keys(vaccineData).length > 0 ? (
          <VaccinesInfos data={vaccineData} />
        ) : (
          <FaSpinner />
        )}
      </section>
    </Container>
  );
}

export default Home;
