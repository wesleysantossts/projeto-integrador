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
            <label htmlFor='nome'>Nome</label>
            <input id='nome' type="text" />
          </Input>
          <Input>
            <label htmlFor='data'>Data de nascimento</label>
            <input id='data' type='date' />
          </Input>
          <Input>
            <label htmlFor='celular'>Celular</label>
            <input id='celular' type="number" />
          </Input>
          <button type='submit'>Salvar</button>
        </Form>
      </Content>
    </Container>
  )
};
