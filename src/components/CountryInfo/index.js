import React from 'react';
import { FaSearch } from 'react-icons/fa';

import CountryCard from './CountryCard';

import { Container } from './styles';

function CountryInfo({ handleGetData, data, setCountryInput }) {
  return (
    <Container>
      <form onSubmit={handleGetData}>
        <div className="search-area">
          <input
            placeholder="Search for a country"
            type="text"
            onChange={(e) => setCountryInput(e.target.value)}
          />
          <button onClick={handleGetData}>
            <FaSearch />
          </button>
        </div>
      </form>
      {data && Object.keys(data).length > 0 ? (
        <CountryCard data={data} />
      ) : (
        <h3>Insert a country</h3>
      )}
    </Container>
  );
}

export default CountryInfo;
