import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 10px auto 20px auto;
  background: #e3e3e3;
  box-shadow: 0 1px 3px;
  border-radius: 8px;
  padding: 40px;
  h1 {
    font-size: 26px;
    margin: 10px 0;
  }

  p {
    font-weight: bold;
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #ee6f57;
  }
  a:hover {
    text-decoration: underline;
  }

  section {
    h2 {
      border-top: 1px solid #cb3737;
      font-size: 22px;
      margin: 10px 0;
      width: 100%;
    }
    .phase {
      margin: 10px 0;
      strong {
        span {
          font-weight: 400;
        }
      }
    }

    .candidate {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin: 10px 0;
      border-bottom: 1px solid #cb3737;
      strong {
        span {
          font-weight: 400;
        }
      }
    }
  }
`;
