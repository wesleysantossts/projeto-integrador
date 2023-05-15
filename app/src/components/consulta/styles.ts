import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  height: 120px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  border-radius: 8px; 
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  
  p {
    line-height: 1.8rem;
    color: #242F51;
    font-weight: bold;
  }
`

export const Hour = styled.div``