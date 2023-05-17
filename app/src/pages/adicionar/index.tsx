import React, { useState } from 'react';
import { 
  Container, 
  Nav, 
  Content,
  Form,
  Input 
} from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import moment from 'moment';

import api from '@/services/api';

type ConsultaType = {
  medico: string,
  data: string,
  local: string,
  horario: string,
}

export default function Adicionar() {
  const [consulta, setConsulta] = useState<ConsultaType>();

  async function criarConsulta(e: React.FormEvent) {
    e.preventDefault();
    
    const response = await api.post('/consulta', consulta);

    if (response && response.data) router.push('/');
  }

  const router = useRouter();
  return (
    <Container>
      <Nav>
        <Link href={router.query?.from as string || '/'}>
          <FaArrowLeft size={25} color={'white'} /> 
        </Link>
      </Nav>
      <Content>
        <Form method='post' onSubmit={(e) => criarConsulta(e)}>
          <Input>
            <label htmlFor='medico'>Médico</label>
            <input id='medico' type="text" value={consulta && consulta.medico} onChange={e => {
              setConsulta((item: any) => ({ ...item, medico: e.target.value }))
            }} />
          </Input>
          <Input>
            <label htmlFor='data'>Dia</label>
            <input id='data' type='date' value={consulta && consulta.data} onChange={e => {
              setConsulta((item: any) => ({ ...item, data: moment(e.target.value).format('YYYY-MM-DD') }))
            }} />
          </Input>
          <Input>
            <label htmlFor='local'>Local</label>
            <input id='local' type='text' value={consulta && consulta.local} onChange={e => {
              setConsulta((item: any) => ({ ...item, local: e.target.value }))
            }} />
          </Input>
          <Input>
            <label htmlFor='horario'>Horário</label>
            <input id='horario' type="time" value={consulta && consulta.horario} onChange={e => {
              const [hora, minuto] = e.target.value.split(':');
              setConsulta((item: any) => ({ ...item, horario: `${hora}:${minuto}` }))
            }} />
          </Input>
          <button type='submit'>Salvar</button>
        </Form>
      </Content>
    </Container>
  )
};
