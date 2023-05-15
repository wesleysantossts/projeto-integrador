import React from 'react';
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
import Image from 'next/image';

export default function Detalhes (){

  function atualizarPerfil(e: React.FormEvent) {
    e.preventDefault();
    console.log('funcionou')
  }

  const router = useRouter();
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
          <Image src='/assets/img/doctors.png' alt='doutores' width={180} height={150} />
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
