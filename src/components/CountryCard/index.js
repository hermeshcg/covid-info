import React from 'react';

import { Container } from './styles';

function CountryCard({ data }) {
  let unix_timestamp = data.updated;
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();
  var seconds = '0' + date.getSeconds();
  var formattedTime =
    hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

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
            Population: <span>{data.population}</span>
          </strong>
          <strong>
            Last update: <span>{formattedTime}</span>
          </strong>
        </div>
        <div className="left">
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
        </div>
      </section>
    </Container>
  );
}

export default CountryCard;
