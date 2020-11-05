import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  li {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin-bottom: 15px;

    justify-content: flex-start;

    &:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  span {
    font-size: 20px;
  }

  strong {
    font-size: 25px;
    font-weight: bold;
  }

  div {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
`;
