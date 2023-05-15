import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #669DDA;
  padding-bottom: 60px; 
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
`

export const Title = styled.div`
  h1 {
    color: white;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 5px;
    margin-top: 5px;
  }
`
