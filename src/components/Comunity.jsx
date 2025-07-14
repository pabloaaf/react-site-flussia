import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
`;

const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #222;
`;

const Text = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #555;
  line-height: 1.7;
`;

export default function Comunity() {
  return (
    <Section id="comunidad">
      <Title>Descubre la comunidad</Title>
      <Text>
        Bienvenido a la comunidad de automatizaciones con agentes de IA.
        Videos.
      </Text>
    </Section>
  );
}
