import styled from 'styled-components';
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #000;
  color: white;
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  max-width: 400px;

  img {
    width: 120px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  span {
    display: block;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 0.85rem;
    color: #ccc;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;

  a {
    background: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    color: black;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Logo = styled.img`
  width: 80px;
  height: auto;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Left>
        <Logo src="/react-site-flussia/assets/logo-flussia.png" alt="Logo Flussia" />
        <p>
          ¿De qué vamos? De mostrarte cómo aprovechar la inteligencia artificial para automatizar tareas, optimizar tu empresa y hacer crecer tu negocio más rápido que nunca.
        </p>
        <span>Flussia © 2025 Todos los derechos reservados.</span><br/>
      </Left>

      <Right>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </Right>
    </FooterContainer>
  );
}
