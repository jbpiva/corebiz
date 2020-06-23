import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;
}

body {
  /* background: #F0F0F5 no-repeat 70% top; */
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font:  16px Roboto, sans-serif;

}

#root {
  margin: 0 auto;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  cursor: pointer;
}
`;
