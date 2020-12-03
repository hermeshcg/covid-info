import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  height: 70vh;
  background: #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 1px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  h1 {
    text-align: center;
  }
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    strong {
      margin: 10px;
      span {
        font-weight: 400;
      }
    }
  }
`;
