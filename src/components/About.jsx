import styled from 'styled-components';
import { SectionA as Section, Subtitle } from '../styles/GlobalStyle';

const TeamGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 320px;

  @media (min-width: 768px) {
    width: 40%;
    height: 100%;
  }
`;

const Info = styled.div`
  padding: 1.5rem;
`;

const Name = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
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
          <Image src="/assets/alejas.jpg" alt="Alejandro" />
          <Info>
            <Name>Alejandro Susillo</Name>
            <Role>Especialista en IA & Transformación Digital</Role>
            <Bio>
              Alejandro Susillo es un ingeniero software con experiencia en diversos países como Holanda, Luxemburgo y España. 
              Ha trabajado en el sector IT, farmacéutico, químico y financiero, en proyectos internacionales y con roles de desarrollador y product manager, brindándole una alta capacidad de adaptación y versatilidad que le permite ajustar sus habilidades técnicas y de gestión según las necesidades de sus clientes. 
            </Bio>
          </Info>
        </Card>

        {/* Persona 2 */}
        <Card>
          <Image src="/react-site-flussia/assets/pabloa2.jpeg" alt="Pablo" />
          <Info>
            <Name>Pablo Alvarez</Name>
            <Role>Estratega de Innovación & Producto</Role>
            <Bio>
              Con experiencia en startups y grandes corporaciones, diseño estrategias centradas en el usuario que potencian nuevos modelos de negocio. 
              Mi visión une creatividad, tecnología y ejecución.
            </Bio>
          </Info>
        </Card>
      </TeamGrid>
    </Section>
  );
}
