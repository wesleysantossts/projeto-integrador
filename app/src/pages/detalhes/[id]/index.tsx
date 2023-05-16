/* eslint-disable */
import React, { useState, useEffect } from 'react';
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
  const [consulta, setConsulta] = useState();
  const router = useRouter();

  function atualizarPerfil(e: React.FormEvent) {
    e.preventDefault();
    console.log('funcionou')
  }

  
  async function pegarConsultas() {
    const response = await api.get(`/consulta/${router.query.id}`);

    if (response && response.data) {
      const consultaFormat = [response.data.consulta]
      setConsulta(consultaFormat);
    }
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
        {consulta && consulta.map(item => {
          return (
          <Form key={item.id}>
            <Input>
              <label htmlFor='nome'>Médico</label>
              <input id='nome' type="text" value={item.medico} />
            </Input>
            <Input>
              <label htmlFor='data'>Dia</label>
              <input id='data' type='date' value={item.data} />
            </Input>
            <Input>
              <label htmlFor='local'>Local</label>
              <input id='local' type='text' value={item.local} />
            </Input>
            <Input>
              <label htmlFor='celular'>Horário</label>
              <input id='celular' type="time" value={item.horario} />
            </Input>
          </Form>
          )
        })}
      </Content>
    </Container>
  )
};
