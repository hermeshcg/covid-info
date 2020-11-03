import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import WorldInfos from '../../components/WorldInfos';
import CountryInfo from '../../components/CountryInfo';

import { Container } from './styles';
import api from '../../services/api';

function Home() {
  const [worldData, setWorldData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [country, setCountry] = useState('');
  const [mode, setMode] = useState('');

  async function handleGetWorldData() {
    setMode('world');
    const response = await api.get('all');
    const data = response.data;
    setWorldData(data);
  }

  function handleSetModeToCountry() {
    setMode('country');
  }

  async function getData() {
    const response = await api.get(`countries/${country}`);
    const data = response.data;
    setCountryData(data);
  }

  return (
    <Container>
      <Header />
      <main>
        <Link className="link" to="/vaccines">
          Go to vaccines
        </Link>
        <section>
          <strong>Select : </strong>
          <button onClick={handleGetWorldData} className="b1">
            World
          </button>
          <button onClick={handleSetModeToCountry} className="b2">
            Select Country
          </button>
        </section>
      </main>

      {mode === '' ? (
        <h1>Do you want to see </h1>
      ) : mode === 'world' ? (
        <WorldInfos data={worldData} />
      ) : (
        <CountryInfo
          data={countryData}
          setCountryInput={setCountry}
          handleGetData={getData}
        />
      )}
    </Container>
  );
}

export default Home;
