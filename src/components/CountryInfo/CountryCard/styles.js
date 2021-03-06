import styled from 'styled-components';

export const Container = styled.div`
  section {
    width: 100%;
    height: 70%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;

    .right {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      border-right: 1px solid #121212;
      margin: 50px;
      padding-right: 100px;
      strong {
        margin: 10px 0;
        span {
          font-weight: 400;
        }
      }
    }
    .left {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin: 30px;
      strong {
        margin: 10px 0;
        span {
          font-weight: 400;
        }
      }
    }
  }

  @media (max-width: 800px) {
    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 90%;
      .right {
        padding: 0;
        border: none;
        margin: 10px 40px 0 40px;
      }
      .left {
        margin: 0 40px;
        padding: 0;
      }
    }
  }
`;
