import { useState, useEffect } from 'react'
import { Container, Title, Content } from './styles'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Consulta from '@/components/consulta'

import api from '@/services/api'

export default function Home() {
  const [agendamento, setAgendamentos] = useState();

  async function pegarConsultas() {
    const response = await api.get('/consultas');

    if (response && response.data) setAgendamentos(response.data.consultas);
  }

  useEffect(() => {
    pegarConsultas()
  }, [])

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Title><h1>Essa semana</h1></Title>
          {agendamento && agendamento.map(item => {
            return <Consulta key={item.id} consulta={item} link={item.id} />
          })}
        </Content>
      </Container>
      <Footer />
    </>
  )
}
