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

const GridSection = styled.section`
  padding: 40px 20px;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const GridTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const GridSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  h4 {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 8px;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
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
          <GridSection>
            <GridTitle>
              ¿Por qué fallan otras empresas?
            </GridTitle>
            <GridSubtitle>
              Muchos intentan implementar soluciones de IA, pero se encuentran con barreras técnicas, estratégicas o legales. Nosotros te ayudamos a superarlas.
            </GridSubtitle>
            <Cards>
              <Card>
                <FaShieldAlt />
                <h4>Seguridad y soberanía de datos</h4>
                <p>Tu información siempre protegida y bajo control.</p>
              </Card>

              <Card>
                <FaSearch />
                <h4>Recolección y estructuración de datos</h4>
                <p>Recolectamos los datos adecuados para que tus modelos de IA funcionen correctamente.</p>
              </Card>

              <Card>
                <FaCogs />
                <h4>Despliegue on-premise de modelos</h4>
                <p>Infraestructura local, sin atarte a proveedores externos.</p>
              </Card>
            </Cards>
          </GridSection>
        </Left>
        <Left
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GridSection>
            <GridTitle>
              Que podemos hacer por ti?
            </GridTitle>
            <GridSubtitle>
              Integramos IA en tus procesos clave para mejorar la eficiencia, reducir costos y escalar tu impacto.
            </GridSubtitle>
            <Cards>
              <Card>
                <FaRobot />
                <h4>Automatización de atención</h4>
                <p>Chatbots y asistentes virtuales que reducen carga operativa.</p>
              </Card>

              <Card>
                <FaBullhorn />
                <h4>Optimización de la cadena de suministro</h4>
              </Card>

              <Card>
                <FaBullhorn />
                <h4>Marketing inteligente</h4>
                <p>Campañas personalizadas que aumentan conversiones.</p>
              </Card>

              <Card>
                <FaBullhorn />
                <h4>Generación de leads inteligente</h4>
              </Card>

              <Card>
                <FaBullhorn />
                <h4>Creación de contenido para redes y anuncios</h4>
              </Card>

              <Card>
                <FaChartLine />
                <h4>Prevención de fraudes</h4>
                <p>Modelos de IA que detectan transacciones anómalas en tiempo real.</p>
              </Card>
            </Cards>
          </GridSection>
        </Left>
      </InfoWrapper>
    </>
  );
}
