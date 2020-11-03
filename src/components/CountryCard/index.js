import React from 'react';

import { Container } from './styles';

function CountryCard({ data }) {
  let unix_timestamp = data.updated;
  var date = new Date(unix_timestamp);
  var day = date.getDay();
  var month = date.getMonth();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();
  var seconds = '0' + date.getSeconds();
  var formattedTime =
    hours +
    ':' +
    minutes.substr(-2) +
    ':' +
    seconds.substr(-2) +
    ' | ' +
    day +
    '/' +
    month +
    '/' +
    year;
  return (
    <Container>
      <section>
        <div className="right">
          <img src={data.countryInfo.flag} alt={data.country} />
          <strong>
            Country: <span>{data.country}</span>
          </strong>
          <strong>
            Continent: <span>{data.continent}</span>
          </strong>
          <strong>
            Population:{' '}
            <span>{Intl.NumberFormat('pt-BR').format(data.population)}</span>
          </strong>
          <strong>
            Last update: <span>{formattedTime}</span>
          </strong>
        </div>
        <div className="left">
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
            <span>
              {Intl.NumberFormat('pt-BR').format(data.todayRecovered)}
            </span>
          </strong>
          <strong>
            Total tests:{' '}
            <span>{Intl.NumberFormat('pt-BR').format(data.tests)}</span>
          </strong>
          <strong>
            Tests per one million:{' '}
            <span>
              {Intl.NumberFormat('pt-BR').format(data.testsPerOneMillion)}
            </span>
          </strong>
        </div>
      </section>
    </Container>
  );
}

export default CountryCard;
