import React, { useState, useEffect } from 'react';
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
import api from '@/services/api';

type ConsultaType = {
  medico: string | null,
  data: string | null,
  local: string | null,
  horario: string | null,
}

export default function Adicionar (){
  const [consulta, setConsulta] = useState<ConsultaType>();
  const router = useRouter();

  async function atualizarConsulta(e: React.FormEvent) {
    e.preventDefault();
    
    const response = await api.put(`/consulta/${router.query.id}`, consulta);

    if (response && response.data) {
      setConsulta(response.data.consulta);
      router.push('/')
    }
  }

  async function excluirConsulta(e: React.FormEvent) {
    e.preventDefault();

    const response = await api.delete(`/consulta/${router.query.id}`);

    if (response && response.data) router.push('/');
  }

  async function pegarConsultas() {
    const response = await api.get(`/consulta/${router.query.id}`);

    if (response && response.data) setConsulta(response.data.consulta);
  }

  useEffect(() => {
    pegarConsultas()
  }, [])

  return (
    <Container>
      <Nav>
        <Link href={router.query?.from as string || '/'}>
          <FaArrowLeft size={25} color={'white'} /> 
        </Link>
      </Nav>
      <Content>
        <Form method='post' onSubmit={(e) => atualizarConsulta(e)}>
          <Input>
            <label htmlFor='medico'>Médico</label>
            <input id='medico' type="text" value={consulta && consulta.medico} onChange={(e) => {
              setConsulta((item) => ({ ...item, medico: e.target.value }))
            }} />
          </Input>
          <Input>
            <label htmlFor='data'>Dia</label>
            <input id='data' type='date' value={consulta && consulta.data} onChange={(e) => {
              setConsulta((item) => ({ ...item, data: e.target.value }))
            }} />
          </Input>
          <Input>
            <label htmlFor='local'>Local</label>
            <input id='local' type='text' value={consulta && consulta.local} onChange={(e) => {
              setConsulta((item) => ({ ...item, local: e.target.value }))
            }} />
          </Input>
          <Input>
            <label htmlFor='horario'>Horário</label>
            <input id='horario' type="time" value={consulta && consulta.horario} onChange={(e) => {
              setConsulta((item) => ({ ...item, horario: e.target.value }))
            }} />
          </Input>
          <button type='submit'>Salvar</button>
          <button type='button' onClick={excluirConsulta}>Excluir</button>
        </Form>
      </Content>
    </Container>
  )
};
