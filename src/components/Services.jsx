import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f4f6f8;
  text-align: center;
`;

const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const ServiceTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ServiceDesc = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default function Services() {
  return (
    <Section id="servicios">
      <Title>Servicios</Title>
      <ServicesGrid>
        <ServiceCard>
          <ServiceTitle>Branding</ServiceTitle>
          <ServiceDesc>Diseñamos marcas memorables que reflejan tu identidad y conectan con tu audiencia.</ServiceDesc>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Diseño Web</ServiceTitle>
          <ServiceDesc>Webs modernas, rápidas y responsivas, centradas en la experiencia del usuario.</ServiceDesc>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Marketing Digital</ServiceTitle>
          <ServiceDesc>Impulsamos tu presencia en línea con campañas estratégicas y contenido efectivo.</ServiceDesc>
        </ServiceCard>
      </ServicesGrid>
    </Section>
  );
}
