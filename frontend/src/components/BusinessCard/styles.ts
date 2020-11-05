import styled, { css } from 'styled-components';

interface Props {
  locationExists: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 580px;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  strong {
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
    color: #000;
    text-align: center;
  }

  span {
    font-size: 20px;
    margin: 10px;
    color: #000;
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
  width: 30%;
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
