import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100vw;
  height: 64px;
  background: #ea7171;
  .link {
    text-decoration: none;
    color: #fafafa;
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
      color: #ddd;
      font-size: 14px;
      a {
        text-decoration: none;
        color: #fff;
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
