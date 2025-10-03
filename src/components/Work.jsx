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
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const StepCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;

const StepNumber = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.surface};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 auto 16px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const StepTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary || '#1a1a1a'};

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StepDescription = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
  }
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