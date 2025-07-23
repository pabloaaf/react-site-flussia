import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import heroImg from '../assets/deconstructed-robot.svg';
import { FaShieldAlt, FaChartLine, FaRobot, FaBullhorn, FaCogs, FaSearch } from 'react-icons/fa'; // https://react-icons.github.io/react-icons/search/#q=shield

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 40px;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }
`;

const InfoWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 10px 20px;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 32px;
  max-width: 500px;
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Word = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
`;

const Button = styled(ScrollLink)`
  margin-top: 2rem;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.buttons.primary.background};
  color: ${({ theme }) => theme.buttons.primary.color};
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttons.primary.backgroundHover};
    color: ${({ theme }) => theme.buttons.primary.color};
  }
`;

const List = styled.ul`
  list-style: disk;
`;

export default function Hero() {
  const words = ['Automático', 'Escalable', 'Eficiente'];
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
    <>
      <HeroWrapper id="inicio">
        <Left
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            <span>Hacemos que tu negocio sea:</span> <br></br>
            <Word>{typedText}</Word>
          </h3>
          <Subtitle>Automatizamos tus procesos para que ganes tiempo, eficiencia y resultados.</Subtitle>
          <br/><br/>
          <Button to="contacto" smooth={true} duration={500} offset={-80}>Hablemos</Button>
        </Left>
        <Right
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={heroImg} alt="Ilustración de IA" />
        </Right>
      </HeroWrapper>
      <InfoWrapper>
        <Left
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Subtitle>¿Por qué la mayoría aún no aprovechan el potencial de la IA?</Subtitle><br/>
          <h4>Muchos intentan implementar soluciones de IA, pero se encuentran con barreras técnicas, estratégicas o legales. Nosotros te ayudamos a superarlas:</h4>
          <br/><br/>
          <List>
            <li><FaShieldAlt/>Soberanía y seguridad de datos: Garantizamos que tus datos estén protegidos y bajo tu control</li>
            <li>Recolección y estructuración de datos: Te ayudamos a capturar los datos necesarios para que la IA funcione realmente bien</li>
            <li>Despliegue local de modelos de IA: Soluciones on-premise, para que no dependas de proveedores externos</li>
          </List>
        </Left>
        <Left
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Subtitle>Aplicaciones concretas que generan valor desde el primer día</Subtitle><br/>
          <h4>Integramos IA en tus procesos clave para mejorar la eficiencia, reducir costos y escalar tu impacto:</h4>
          <br/><br/>
          <List>
            <li>Atención al cliente automatizada</li>
            <li>Optimización de la cadena de suministro</li>
            <li>Marketing basado en datos</li>
            <li>Generación de leads inteligente</li>
            <li>Creación de contenido para redes y anuncios</li>
            <li>Análisis financiero y detección de fraudes</li>
            <List>
              <li>Utilizamos modelos de IA para automatizar el análisis de grandes volúmenes de transacciones, identificar patrones anómalos y prevenir fraudes en tiempo real</li>
            </List>
            <li>Desarrollo de soluciones IA a medida</li>
          </List>
        </Left>
      </InfoWrapper>
    </>
  );
}
