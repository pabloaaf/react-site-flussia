import styled from 'styled-components';
import { PopupButton } from 'react-calendly';
import { SectionB as Section, Subtitle } from '../styles/GlobalStyle';
import { CTAButton } from '../styles/GlobalStyle';

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
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
`;

const StyledButton = styled(PopupButton)`
  background: ${({ theme }) => theme.colors.primary || '#0f62fe'};
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.primary || '#0f62fe'};
  border-radius: 24px;
  padding: 0.75rem 2rem;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  align-items: center;
  gap: 8px;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary || '#0f62fe'};
  }

  &::after {
    content: '→';
    font-size: 18px;
  }
`;

export default function Contact() {
  return (
    <Section id="contacto">
      <h3>Contacto</h3>
      <StyledButton
        url="https://calendly.com/flussia/30min"
        rootElement={document.getElementById('root')}
        text="¿Tienes un proyecto en mente? Agenda una reunión"
      />
      <br/><br/>
      <Subtitle>¿Prefieres empezar por un mensaje? Te leemos y te orientamos sin compromiso.</Subtitle>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Tu nombre" required />
        <Input type="email" placeholder="Tu correo electrónico" required />
        <Textarea rows="5" placeholder="Tu mensaje" required />
        <CTAButton type="submit">Enviar mensaje</CTAButton>
      </Form>

    </Section>
  );
}
