import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  .search-area {
    height: 30px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      height: 30px;
      width: 80%;
      border: 1px solid #cb3737;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
      padding: 0 10px;
    }

    button {
      height: 30px;
      width: 20%;
      border: 1px solid #cb3737;
      background: #ccc;
      border-bottom-right-radius: 8px;
      border-top-right-radius: 8px;
      border-left: none;
    }
    button:hover {
      cursor: pointer;
      background: #aaa;
    }
  }
`;
