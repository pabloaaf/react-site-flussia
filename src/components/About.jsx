import styled from 'styled-components';
import { SectionA as Section, Subtitle } from '../styles/GlobalStyle';

const TeamGrid = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface || '#f5f5f5'};

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
`;

const Info = styled.div`
  padding: 24px 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 32px 28px;
  }
`;

const Name = styled.h4`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.secondary || '#1a1a1a'};

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Role = styled.p`
  font-size: 15px;
  color: '#666';
  margin-bottom: 16px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Bio = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary || '#555'};
  text-align: left;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
  }
`;

export default function About() {
  return (
    <Section id="nosotros">
      <h3><span>Sobre</span> Nosotros</h3>
      <Subtitle>
        En Flussia combinamos creatividad, estrategia y tecnología para ayudar a empresas a alcanzar su máximo potencial. 
        Nuestro enfoque está centrado en el cliente, brindando soluciones personalizadas que impulsan resultados tangibles.
      </Subtitle>

      <TeamGrid>
        {/* Persona 1 */}
        <Card>
          <ImageWrapper>
            <Image src="/react-site-flussia/assets/alejas.jpg" alt="Alejandro Susillo" />
          </ImageWrapper>
          <Info>
            <Name>Alejandro Susillo</Name>
            <Role>Desarrollador Software & Transformación Digital</Role>
            <Bio>
              Con experiencia internacional en Holanda, Luxemburgo y España, desarrollo soluciones tecnológicas innovadoras. 
              Mi versatilidad como desarrollador y product manager me permite adaptar estrategias técnicas según cada cliente y proyecto.
            </Bio>
          </Info>
        </Card>

        {/* Persona 2 */}
        <Card>
          <ImageWrapper>
            <Image src="/react-site-flussia/assets/pabloa.jpeg" alt="Pablo Alvarez" />
          </ImageWrapper>
          <Info>
            <Name>Pablo Alvarez</Name>
            <Role>Desarrollador Full-Stack & Innovación</Role>
            <Bio>
              Diseño estrategias centradas en el usuario que simplifican la adopción. 
              Mi visión une creatividad, tecnología y ejecución. Transformo ideas complejas en soluciones accesibles y escalables.
            </Bio>
          </Info>
        </Card>
      </TeamGrid>
    </Section>
  );
}