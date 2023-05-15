import { Container } from './styles';
import Link from 'next/link';
import { FaHome, FaUser, FaPlusCircle } from 'react-icons/fa';

export default function Footer() {
  const routes = [
    { id: 1, path: '/', icon: <FaHome /> },
    { id: 2, path: '/adicionar', icon: <FaPlusCircle /> },
    { id: 3, path: '/perfil', icon: <FaUser /> },
  ]

  return (
    <Container>
      {routes.map(item => {
        return (
          <Link key={item.id} href={item.path}>
            {item.icon}
          </Link>
        )
      })}
    </Container>
  )
}