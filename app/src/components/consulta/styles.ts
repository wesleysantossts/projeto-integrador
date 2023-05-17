import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  height: 120px;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template: auto / auto 30%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border-radius: 8px;
  padding: 0 20px;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  
  p {
    line-height: 1.8rem;
    color: #242F51;
    font-weight: bold;
    text-align: left;
  }

  & p:first-child {
    color: #aaa;
    font-size: .9rem;
  }
`

export const Hour = styled.div`
  font-weight: bold;
  font-size: 2rem;
`