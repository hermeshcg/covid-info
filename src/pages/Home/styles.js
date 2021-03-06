import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background: #e4ebeb;
  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: 20px;
    .link {
      text-decoration: none;
      color: #ee6f57;
    }
    .link:hover {
      color: #cb3737;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Roboto, sans-serif;

      strong {
        margin: 0 10px;
      }

      .b1 {
        width: 100px;
        border: 1px solid #cb3737;
        padding: 5px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        transition: 0.3s;
      }
      .b1:hover {
        cursor: pointer;
        background: #ee6f57;
        color: #fff;
      }
      .b2 {
        width: 100px;
        border: 1px solid #cb3737;
        padding: 5px;
        border-left: none;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        transition: 0.3s;
      }
      .b2:hover {
        cursor: pointer;
        color: #fff;
        background: #ee6f57;
      }
    }
  }

  @media (max-width: 800px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .link {
        margin: 10px;
      }
    }
  }
`;
