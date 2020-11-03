import React from 'react';

import { Container } from './styles';

function WorldInfos({ data }) {
  return (
    <Container>
      <h1>WORLD INFORMATIONS</h1>
      <main>
        <strong>
          Total cases: <span>{data.cases}</span>
        </strong>
        <strong>
          Total cases today: <span>{data.todayCases}</span>
        </strong>
        <strong>
          Total deaths: <span>{data.deaths}</span>
        </strong>
        <strong>
          Total deaths today: <span>{data.todayDeaths}</span>
        </strong>
        <strong>
          Total recovered: <span>{data.recovered}</span>
        </strong>
        <strong>
          Total recovered today: <span>{data.todayRecovered}</span>
        </strong>
        <strong>
          Total tests: <span>{data.tests}</span>
        </strong>
        <strong>
          Affected countries: <span>{data.affectedCountries}</span>
        </strong>
      </main>
    </Container>
  );
}

export default WorldInfos;
