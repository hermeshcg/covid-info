import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100vw;
  height: 100px;
  background: #e3e3e3;
  .link {
    text-decoration: none;
    color: #cb3737;
    margin: 0 40px;
    font-weight: bold;
    font-size: 28px;
  }
  aside {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    strong {
      margin: 3px 40px;
      color: #cb3737;
      font-size: 14px;
      a {
        text-decoration: none;
        color: #ee6f57;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
