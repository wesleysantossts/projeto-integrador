/* eslint-disable */
import React, { useEffect } from 'react';
import { 
  Container, 
  Nav, 
  Content,
  Form,
  Input 
} from './styles';
import { FaArrowLeft, FaPen } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';

import api from '@/services/api';

export default function Detalhes (){
  const router = useRouter();

  function atualizarPerfil(e: React.FormEvent) {
    e.preventDefault();
    console.log('funcionou')
  }

  
  async function pegarConsultas() {
    const response = await api.get(`/consulta/`);

    if (response && response.data) setAgendamentos(response.data.consultas);
  }

  useEffect(() => {
    pegarConsultas()
  }, [])

  return (
    <Container>
      <Nav>
        <div>
          <Link href={router.query?.from as string || '/'}>
            <FaArrowLeft size={25} color={'white'} /> 
          </Link>
          <Link href={router.query?.from as string || '/'}>
            <FaPen size={25} color={'white'} /> 
          </Link>
        </div>
        <div>
          <img src='/assets/img/doctors.png' alt='doutores' />
        </div>
      </Nav>
      <Content>
        <Form>
          <Input>
            <label htmlFor='nome'>Médico</label>
            <input id='nome' type="text" />
          </Input>
          <Input>
            <label htmlFor='data'>Dia</label>
            <input id='data' type='date' />
          </Input>
          <Input>
            <label htmlFor='local'>Local</label>
            <input id='local' type='text' />
          </Input>
          <Input>
            <label htmlFor='celular'>Horário</label>
            <input id='celular' type="time" />
          </Input>
        </Form>
      </Content>
    </Container>
  )
};
