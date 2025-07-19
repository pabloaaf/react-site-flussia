import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionB as Section, Subtitle } from '../styles/GlobalStyle';

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

const StepsWrapper = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StepCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.surface};
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const StepNumber = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.surface};
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
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const AnimatedStepCard = motion(StepCard);

export default function Work() {
  return (
    <Section id="como-funciona">
      <h3><span>Cómo</span> Trabajamos</h3>
      <Subtitle>Un proceso simple en 3 pasos para transformar tu negocio</Subtitle>

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
