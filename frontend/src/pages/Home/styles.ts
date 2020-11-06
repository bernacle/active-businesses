import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px)
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f6f7f9;
  position: relative;
`;

export const LoadingContainer = styled.div`
  background-color: #f6f7f9;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #fcb253, #fb6c63);
  padding: 100px 100px;

  p {
    font-size: 50px;
    color: #fff;
    text-transform: uppercase;
    font-weight: lighter;
    text-align: center;
  }
`;

export const Body = styled.div`
  background-color: #f6f7f9;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  animation: ${appearFromRight} 1s;
`;

export const ButtonOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: #fb6c63;
  height: 130px;
  width: 140px;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  font-weight: 500;
  transition: background-color 0.2s;

  & + button {
    margin-left: 50px;
  }

  &:hover {
    background: ${shade(0.2, '#fb6c63')};
  }

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
  }
`;
