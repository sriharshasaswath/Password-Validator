import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100vh;
  }
`

export const Container = styled.div`
  background: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 9px;
`

export const MainContainer = styled.div`
  background: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NameText = styled.p`
  color: white;
  font-family: 'Roboto';
`

export const MainHeading = styled.h1`
  color: white;
  font-family: 'Roboto';
`
export const Warning = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 8px;
`

export const Input = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 0;
  background-color: white;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`
