import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 30%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px;
  padding: 16px;

  h1 {
    margin: 8px 0;
  }

  main {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    margin: 0;
    strong {
      margin: 8px 0;
    }
    span {
      font-weight: 400;
    }
  }
`;
