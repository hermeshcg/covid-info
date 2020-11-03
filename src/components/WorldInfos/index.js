import React from 'react';

import { Container } from './styles';

function WorldInfos({ data }) {
  return (
    <Container>
      <h1>Information about covid worldwide</h1>
      <main>
        <strong>
          Total cases:{' '}
          <span>{Intl.NumberFormat('pt-BR').format(data.cases)}</span>
        </strong>
        <strong>
          Total cases today:{' '}
          <span>{Intl.NumberFormat('pt-BR').format(data.todayCases)}</span>
        </strong>
        <strong>
          Total deaths:{' '}
          <span>{Intl.NumberFormat('pt-BR').format(data.deaths)}</span>
        </strong>
        <strong>
          Total deaths today:{' '}
          <span>{Intl.NumberFormat('pt-BR').format(data.todayDeaths)}</span>
        </strong>
        <strong>
          Total recovered:{' '}
          <span>{Intl.NumberFormat('pt-BR').format(data.recovered)}</span>
        </strong>
        <strong>
          Total recovered today:{' '}
          <span>{Intl.NumberFormat('pt-BR').format(data.todayRecovered)}</span>
        </strong>
        <strong>
          Total tests:{' '}
          <span>{Intl.NumberFormat('pt-BR').format(data.tests)}</span>
        </strong>
        <strong>
          Affected countries: <span>{data.affectedCountries}</span>
        </strong>
      </main>
    </Container>
  );
}

export default WorldInfos;
