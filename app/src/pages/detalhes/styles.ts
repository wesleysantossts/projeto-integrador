import styled from 'styled-components';

export const Container = styled.div`
  background-color: #669DDA;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Nav = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  & div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
    width: 100%;
  }

  & div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;

    img {
      width: 50%;
      height: auto;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  background-color: white;
  border-radius: 42px 42px 0 0;
  padding: 40px 0;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  
  button {
    margin: 40px 0 0 0;
    width: 60%;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: #669DDA;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
  }
`
  
export const Input = styled.div`
  display: flex;
  border-bottom: .5px solid #A0A0A0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 80px;
  width: 100%;
  padding-bottom: 20px;

  label {
    text-align: left;
    font-size: 16px;
    color: #A0A0A0;
    width: 30%;
  }

  input {
    width: 70%;
    font-size: 20px;
    color: #242F51;
    text-align: center;
    border: none; 

    &:focus {
      outline: none;
    }

    &[type='date'] {
      background-color: white;
      width: 50%;
    }

    &[type='time'] {
      background-color: white;
      width: 40%;
    }
  }
`