import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  -webkit-overflow-scrolling: touch;
}



body {
    background-color: #f6f7f9;
    color: #000;
  --webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500
}

button {
 cursor: pointer;
}

::-webkit-scrollbar {
display: none;
}


`;
