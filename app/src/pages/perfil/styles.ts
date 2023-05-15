import styled from 'styled-components';

export const Container = styled.div`
  background-color: #669DDA;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const Nav = styled.div`
  height: 10%;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
  background-color: white;
  border-radius: 42px 42px 0 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  button {
    
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 100px;
  width: 100%;

  label {
    text-align: left;
    width: 30%;
  }

  input {
    width: 70%;
  }
`