import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background: #e4ebeb;
  .linkVac {
    text-decoration: none;
    margin: 20px 20px;
    color: #ee6f57;
  }
  .linkVac:hover {
    color: #cb3737;
  }
`;
