/* eslint-disable */
import { Container, Text, Hour } from './styles';
import moment from 'moment';

type ConsultaType = {
  consulta: any,
  link: any
}

export default function Consulta({ consulta, link }: ConsultaType) {
  const data = consulta.data.slice(0, 2) + '/' + consulta.data.slice(2, 4) + '/' + consulta.data.slice(4)

  return (
    <Container href={`/detalhes/${link}`}>
      <Text>
        <p>{data}</p>
        <p>{consulta.medico}</p>
        <p>Local: {consulta.local}</p>
      </Text>
      <Hour>
        <p>{consulta.horario.slice(0, 2) + ':' + consulta.horario.slice(2)}</p>
      </Hour>
    </Container>
  )
}