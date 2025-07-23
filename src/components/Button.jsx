// src/components/Button.jsx
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
