import styled from 'styled-components';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Descubrimiento y Análisis',
    description:
      'Analizamos tus procesos actuales, identificamos oportunidades de automatización y detectamos ineficiencias. Realizamos una auditoría completa para entender las necesidades específicas de tu negocio.',
  },
  {
    title: 'Diseño y Desarrollo',
    description:
      'Creamos soluciones personalizadas utilizando IA y automatización inteligente, adaptadas a tus objetivos. Cada solución se prueba y optimiza cuidadosamente.',
  },
  {
    title: 'Lanzamiento y Soporte',
    description:
      'Implementamos tus soluciones, brindamos capacitación a tu equipo y ofrecemos soporte continuo para maximizar el retorno de inversión y mejorar de forma constante.',
  },
];

const Section = styled.section`
  background-color: #f4f6f8;
  padding: 5rem 2rem;
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 700;

  span {
    color: #0f62fe;
  }
`;

const Subheading = styled.p`
  color: #555;
  margin-bottom: 4rem;
`;

const StepsWrapper = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StepCard = styled.div`
  background: #f9fafc;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 245, 195, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const StepNumber = styled.div`
  background: #0f62fe;
  color: #f9fafc;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;

const AnimatedStepCard = motion(StepCard);

export default function Work() {
  return (
    <Section id="como-funciona">
      <Heading>Cómo <span>Trabajamos</span></Heading>
      <Subheading>Un proceso simple en 3 pasos para transformar tu negocio</Subheading>

      <StepsWrapper>
        {steps.map((step, index) => (
          <AnimatedStepCard
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <StepNumber>{index + 1}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </AnimatedStepCard>
        ))}
      </StepsWrapper>
    </Section>
  );
}
