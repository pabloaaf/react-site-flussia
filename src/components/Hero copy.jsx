import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaShieldAlt } from 'react-icons/fa'; // https://react-icons.github.io/react-icons/search/#q=shield

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.surface};
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
  padding: 0.75rem 1.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.buttons.primary.background};
  color: ${({ theme }) => theme.buttons.primary.color};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttons.primary.backgroundHover};
    color: ${({ theme }) => theme.buttons.primary.color};
  }
`;

const List = styled.ul`
  ul {
    list-style: disk;
  }
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
    <Section id="inicio">
      <Logo src="/react-site-flussia/assets/logo-flussia.png" alt="Logo Flussia" />
      <h3>
        <span>Hacemos que tu negocio sea:</span> <br></br>
        <Word>{typedText}</Word>
      </h3>
      <Subtitle>Automatizamos tus procesos para que ganes tiempo, eficiencia y resultados.</Subtitle>

      <Button to="contacto" smooth={true} duration={500} offset={-80}>Hablemos</Button>
      <br/>
      <h4>¿Por qué la mayoría de las empresas aún no aprovechan el potencial de la IA?</h4>
      <br/>
      <Subtitle>Muchos intentan implementar soluciones de IA, pero se encuentran con barreras técnicas, estratégicas o legales. Nosotros te ayudamos a superarlas:</Subtitle>
      <br/>
      <List>
        <li><FaShieldAlt/>Soberanía y seguridad de datos: Garantizamos que tus datos estén protegidos y bajo tu control</li>
        <li>Recolección y estructuración de datos: Te ayudamos a capturar los datos necesarios para que la IA funcione realmente bien</li>
        <li>Despliegue local de modelos de IA: Soluciones on-premise, para que no dependas de proveedores externos</li>
      </List>

      <br/>
      <h4>Aplicaciones concretas que generan valor desde el primer día</h4>
      <br/>
      <Subtitle>Integramos IA en tus procesos clave para mejorar la eficiencia, reducir costos y escalar tu impacto:</Subtitle>
      <br/>
      <List>
        <li>Atención al cliente automatizada</li>
        <li>Optimización de la cadena de suministro</li>
        <li>Marketing basado en datos</li>
        <li>Generación de leads inteligente</li>
        <li>Creación de contenido para redes y anuncios</li>
        <li>Análisis financiero y detección de fraudes</li>
        <list>
          <li>Utilizamos modelos de IA para automatizar el análisis de grandes volúmenes de transacciones, identificar patrones anómalos y prevenir fraudes en tiempo real</li>
        </list>
        <li>Desarrollo de soluciones IA a medida</li>
      </List>


    </Section>
  );
}
