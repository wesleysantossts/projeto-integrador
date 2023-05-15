import { useState } from 'react'
import { Container, Title, Content } from './styles'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Consulta from '@/components/consulta'

export default function Home() {
  const [agendamento, setAgendamentos] = useState([
    {id: 1, data: '20230514', medico: 'Geriatra', local: 'Policlinica', horario: '1520'},
    {id: 2, data: '20230514', medico: 'Geriatra', local: 'Policlinica', horario: '1520'},
    {id: 3, data: '20230514', medico: 'Geriatra', local: 'Policlinica', horario: '1520'},
    {id: 4, data: '20230514', medico: 'Geriatra', local: 'Policlinica', horario: '1520'},
  ])

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Title><h1>Essa semana</h1></Title>
          {agendamento.map(item => {
            return <Consulta key={item.id} consulta={item} />
          })}
        </Content>
      </Container>
      <Footer />
    </>
  )
}
