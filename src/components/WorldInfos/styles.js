import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  height: 70vh;
  background: #e3e3e3;
  border-radius: 8px;
  border: 1px solid #cb3737;
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
    align-items: flex-start;
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
