import styled from 'styled-components';
import { PopupButton } from 'react-calendly';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: center;
`;

const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  background: #0f62fe;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0043ce;
  }
`;

const StyledButton = styled(PopupButton)`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #0f62fe;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background-color: #0049c6;
  }
`;

export default function Contact() {
  return (
    <Section id="contacto">
      <Title>Contáctanos</Title>
      <Subtitle>¿Prefieres empezar por un mensaje? Te leemos y te orientamos sin compromiso.</Subtitle>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Tu nombre" required />
        <Input type="email" placeholder="Tu correo electrónico" required />
        <Textarea rows="5" placeholder="Tu mensaje" required />
        <Button type="submit">Enviar mensaje</Button>
      </Form>
      <Subtitle>o</Subtitle>
      <StyledButton
        url="https://calendly.com/flussia/30min"
        rootElement={document.getElementById('root')}
        text="¿Tienes un proyecto en mente? Agenda una reunión"
      />

    </Section>
  );
}
