import { styled, createGlobalStyle } from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


export const FooterWrapper = styled.div`
  margin-top: auto; /* empuja el footer al final sin estirar el main */
`;

export const SectionA = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  text-align: center;
`;

export const SectionB = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.primary || '#0f62fe'};
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.primary || '#0f62fe'};
  border-radius: 24px;
  padding: 0.75rem 2rem;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
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

/*
const Text = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #555;
  line-height: 1.7;
`;
*/

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.body};
  }

  h1 {
    font-size: ${({ theme }) => theme.textStyles.h1.fontSize};
    font-weight: ${({ theme }) => theme.textStyles.h1.fontWeight};
    font-family: ${({ theme }) => theme.textStyles.h1.fontFamily};
    color: ${({ theme }) => theme.textStyles.h1.color};
  }

  h2 {
    font-size: ${({ theme }) => theme.textStyles.h2.fontSize};
    font-weight: ${({ theme }) => theme.textStyles.h2.fontWeight};
    font-family: ${({ theme }) => theme.textStyles.h2.fontFamily};
    color: ${({ theme }) => theme.textStyles.h2.color};
  }

  h3 {
    font-size: ${({ theme }) => theme.textStyles.h3.fontSize};
    font-weight: ${({ theme }) => theme.textStyles.h3.fontWeight};
    font-family: ${({ theme }) => theme.textStyles.h3.fontFamily};
    margin-bottom: ${({ theme }) => theme.textStyles.h3.marginBottom};
    color: ${({ theme }) => theme.textStyles.h3.color};
    line-height:  ${({ theme }) => theme.textStyles.h3.lineHeight};
    letter-spacing: -0.02em;

    span {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    @media (max-width: 345px) {
      font-size: 40px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 500;
    cursor: pointer;
    background: ${({ theme }) => theme.buttons.primary.background};
    color: ${({ theme }) => theme.buttons.primary.color};
    
    &:hover {
      background: ${({ theme }) => theme.buttons.primary.backgroundHover};
    }
  }

  ul {
    list-style: none;
  }

  input,textarea:focus-visible {
    outline-color: ${({ theme }) => theme.colors.accent};
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;