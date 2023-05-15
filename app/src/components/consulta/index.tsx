import { Container, Text, Hour } from './styles';

import { FaHome, FaUser, FaPlusCircle } from 'react-icons/fa';

export default function Consulta({ consulta }) {
  return (
    <Container href={'/'}>
      <Text>
        <p>{consulta.data}</p>
        <p>{consulta.medico}</p>
        <p>Local: {consulta.local}</p>
      </Text>
      <Hour>
        <p>{consulta.horario}</p>
      </Hour>
    </Container>
  )
}