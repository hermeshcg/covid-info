import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import WorldInfos from '../../components/WorldInfos';
import CountryInfo from '../../components/CountryInfo';

import { Container } from './styles';
import api from '../../services/api';

function Home() {
  const history = useHistory();
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

  async function getData(event) {
    event.preventDefault();
    await api
      .get(`countries/${country}`)
      .then((response) => {
        const data = response.data;
        setCountryData(data);
      })
      .catch((error) => {
        alert("Country not found or doesn't have any cases");
        history.push('/');
      });
  }

  return (
    <Container>
      <Header />
      <main>
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
        <h3>Select between world or country to see the data</h3>
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
