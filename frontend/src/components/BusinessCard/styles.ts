import styled, { keyframes, css } from 'styled-components';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px)
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;

interface Props {
  locationExists: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  animation: ${appearFromLeft} 1s;
`;

export const Card = styled.div`
  flex-direction: column;
  width: 380px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  justify-content: flex-start;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fb6c63;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  strong {
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
    color: #fff;
    text-align: center;
  }

  span {
    margin: 10px;
    color: #000;
    display: flex;

    p {
      font-weight: bolder;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  span {
    margin-top: 10px;
  }
`;

export const AdressInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  p {
    margin-left: 10px;
  }
`;

export const MapInfo = styled.div<Props>`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 5px;
  border: 1px solid #fb6c63;
  border-radius: 8px;
  transition: background-color 0.3s;

  ${props =>
    props.locationExists
      ? css`
          a {
            transition: color 0.3s;
            justify-content: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #000;
          }
          span {
            font-size: 15px;
            margin-bottom: 10px;
            transition: color 0.3s;
            color: #000;
            text-align: center;
          }

          &:hover {
            background-color: #fb6c63;
            color: #fff;
          }

          &:hover span {
            color: #fff;
          }

          &:hover a {
            color: #fff;
          }
        `
      : css`
          a {
            transition: color 0.3s;
            justify-content: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #999;
          }
          span {
            font-size: 15px;
            margin-bottom: 10px;
            transition: color 0.3s;
            color: #999;
            text-align: center;
          }
        `}
`;
