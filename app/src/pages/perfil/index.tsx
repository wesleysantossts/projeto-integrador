/* eslint-disable */
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

type DataType = {
  nome: string | null,
  dataNascimento: string | null,
  celular: string | null,
}

export default function Perfil (){
  const [data, setData] = useState<DataType>();

  async function atualizarPerfil(e: React.FormEvent) {
    e.preventDefault();
     const response = await api.post(`/usuario/${data && data.id}`, data);

    if (response && response.data.success) router.back();
  }

  const router = useRouter();

  async function pegarUsuario() {
    const response = await api.get('/usuario').catch(error => console.log('Erro ao consultar usuário', error))
    if (response) setData(response.data.usuario)
  }
  
  useEffect(() => {
    pegarUsuario();
  }, []);

  return (
    <Container>
      <Nav>
        <Link href={router.query?.from as string || '/'}>
          <FaArrowLeft size={25} color={'white'} /> 
        </Link>
      </Nav>
      <Content>
        <Form method='post' onSubmit={(e) => atualizarPerfil(e)}>
          <Input>
            <label htmlFor='nome'>Nome</label>
            <input id='nome' type="text" value={data && data.nome} onChange={(e) => {
              setData((item) => ({ ...item, nome: e.target.value }))
            }} />
          </Input>
          <Input>
            <label htmlFor='data'>Data de nascimento</label>
            <input id='data' type='date' value={data && data.dataNascimento} onChange={(e) => {
              setData((item) => ({ ...item, dataNascimento: e.target.value }))
            }} />
          </Input>
          <Input>
            <label htmlFor='celular'>Celular</label>
            <input id='celular' type="number" value={data && data.celular} onChange={(e) => {
              setData((item) => ({ ...item, celular: e.target.value }))
            }} />
          </Input>
          <button type='submit'>Salvar</button>
        </Form>
      </Content>
    </Container>
  )
};
