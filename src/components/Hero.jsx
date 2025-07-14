import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: #f9fafc;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 240px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  color: #222;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
`;

const Word = styled.span`
  color: #0f62fe;
  border-right: 2px solid #0f62fe;
  white-space: nowrap;
  overflow: hidden;
`;

const Button = styled(ScrollLink)`
  margin-top: 2rem;
  padding: 0.75rem 1.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  background-color: #0f62fe;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0049c6;
  }
`;

export default function Hero() {
  const words = ['Automatizable', 'Escalable', 'Inteligente'];
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setTypedText(current => current.slice(0, -1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setTypedText(current => current + currentWord.charAt(current.length));
      }, 100);
    }

    // Cambio de estado
    if (!isDeleting && typedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <Section id="inicio">
      <Logo src="/react-site-flussia/assets/logo-flussia.png" alt="Logo Flussia" />
      <Title>
        Hacemos que tu negocio sea: <br></br>
        <Word>{typedText}</Word>
      </Title>
      <Subtitle>Automatizamos tus procesos para que ganes tiempo, eficiencia y resultados.</Subtitle>

      <Button to="contacto" smooth={true} duration={500} offset={-80}>Hablemos</Button>
    </Section>
  );
}
