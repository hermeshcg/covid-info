import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <h1>Covid Info Pannel</h1>
      <aside>
        <strong>
          API documentation:{' '}
          <a
            href="http://disease.sh/docs/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            disease.sh
          </a>
        </strong>
        <strong>
          Data sourced from:{' '}
          <a
            href="https://www.worldometers.info/coronavirus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Worldometers
          </a>
        </strong>
      </aside>
    </Container>
  );
}

export default Header;
