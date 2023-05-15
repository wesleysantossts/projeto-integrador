import React from 'react';
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

export default function Perfil (){

  function atualizarPerfil(e: React.FormEvent) {
    e.preventDefault();
    console.log('funcionou')
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
        <Form method='post' onSubmit={(e) => atualizarPerfil(e)}>
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
          <button type='submit'>Salvar</button>
        </Form>
      </Content>
    </Container>
  )
};
