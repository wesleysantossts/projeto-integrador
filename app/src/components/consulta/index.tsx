import { Container, Text, Hour } from './styles';

type ConsultaType = {
  consulta: any,
  link: any
}

export default function Consulta({ consulta, link }: ConsultaType) {
  return (
    <Container href={link}>
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