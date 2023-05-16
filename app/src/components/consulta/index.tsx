/* eslint-disable */
import { Container, Text, Hour } from './styles';
import moment from 'moment';

type ConsultaType = {
  consulta: any,
  link: any
}

export default function Consulta({ consulta, link }: ConsultaType) {
  const data = moment(consulta.data, 'YYYY-MM-DD').format('DD/MM/YYYY');

  return (
    <Container href={`/detalhes/${link}`}>
      <Text>
        <p>{data}</p>
        <p>{consulta.medico}</p>
        <p>Local: {consulta.local}</p>
      </Text>
      <Hour>
        <p>{consulta.horario}</p>
      </Hour>
    </Container>
  )
}