import React from 'react';
import { 
  Container, 
  Nav, 
  Content,
  Form,
  Input 
} from './styles';

export default function Perfil (){
  return (
    <Container>
      <Nav></Nav>
      <Content>
        <Form method='post' onSubmit={() => {}}>
          <Input>
            <label htmlFor='nome'>Nome</label>
            <input id='nome' type="text" />
          </Input>
          <Input>
            <label htmlFor='nome'>Data de nascimento</label>
            <input type="text" />
          </Input>
          <Input>
            <label htmlFor='nome'>Celular</label>
            <input type="text" />
          </Input>
          <button type='submit'>Salvar</button>
        </Form>
      </Content>
    </Container>
  )
};
