import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import ScrollToSectionLink from './ScrollToSectionLink';
import { Link as RouterLink } from 'react-router-dom';
import { CTAButton } from '../styles/GlobalStyle';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: auto;

  @media (min-width: 768px) {
    width: 100px;
  }
`;

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  span {
    width: 25px;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const DesktopMenu = styled.ul`
  display: none;
  gap: 2.5rem;
  list-style: none;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary || '#666'};
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || '#0f62fe'};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const DropdownToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary || '#666'};
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || '#0f62fe'};
  }

  &::after {
    content: '▼';
    font-size: 10px;
    transition: transform 0.3s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  min-width: 280px;
  padding: 1.5rem;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const DropdownItem = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary || '#1a1a1a'};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary || '#666'};
    line-height: 1.5;
  }

  &:hover {
    h4 {
      color: ${({ theme }) => theme.colors.primary || '#0f62fe'};
    }
  }
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.4s ease, visibility 0.4s ease;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 6rem 2rem 2rem;
  gap: 2rem;
  height: 100%;
`;

const MobileMenuItem = styled.li`
  cursor: pointer;
  color: white;
  font-size: 32px;
  font-weight: 600;
  transition: color 0.3s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || '#0f62fe'};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const MobileDropdown = styled.div`
  cursor: pointer;
  color: white;
  font-size: 32px;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 32px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    width: 100%;
    text-align: left;

    &::after {
      content: '▼';
      font-size: 16px;
      transition: transform 0.3s;
      transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    }
  }
`;

const MobileDropdownItems = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease;
  margin-top: ${({ isOpen }) => (isOpen ? '1.5rem' : '0')};
  padding-left: 1rem;

  div {
    margin-bottom: 1.5rem;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;

    &:hover {
      color: ${({ theme }) => theme.colors.primary || '#0f62fe'};
    }
  }
`;

const MobileCTA = styled.button`
  width: 100%;
  background: white;
  color: black;
  border: none;
  border-radius: 32px;
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 2px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const CTAButtonHEAD = styled(CTAButton)`
  @media (max-width: 1023px) {
    display: none;
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }
`

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Close dropdown
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  return (
    <Nav>
      <RouterLink to="/">
        <Logo src="/react-site-flussia/assets/logo-flussia.png" alt="Logo Flussia" />
      </RouterLink>

      <Hamburger 
        onClick={() => setIsMobileOpen(!isMobileOpen)} 
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </Hamburger>

      <DesktopMenu>
        <MenuItem ref={dropdownRef}>
          <DropdownToggle 
            isOpen={isDropdownOpen}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Soluciones
          </DropdownToggle>
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem>
              <h4>Chatbots Inteligentes</h4>
              <p>Automatización de atención al cliente con IA.</p>
            </DropdownItem>
            <DropdownItem>
              <h4>Automatizaciones</h4>
              <p>Optimiza procesos repetitivos y ahorra tiempo.</p>
            </DropdownItem>
            <DropdownItem>
              <h4>Integración con IA</h4>
              <p>Conecta sistemas existentes con inteligencia artificial.</p>
            </DropdownItem>
            <DropdownItem>
              <h4>Consultorías y Mentorías</h4>
              <p>Asesoría personalizada en transformación digital.</p>
            </DropdownItem>
          </DropdownMenu>
        </MenuItem>
        <MenuItem>
          <ScrollToSectionLink to="nosotros">Sobre nosotros</ScrollToSectionLink>
        </MenuItem>
        <MenuItem>
          <RouterLink to="/blog/">Blog</RouterLink>
        </MenuItem>
      </DesktopMenu>
      <CTAButtonHEAD>
            <ScrollToSectionLink to="contacto"  onClick={() => setIsMobileOpen(false)} style={{ color: 'white' }}>Hablemos</ScrollToSectionLink>
      </CTAButtonHEAD>

      <MobileMenuWrapper isOpen={isMobileOpen}>
        <CloseButton onClick={() => setIsMobileOpen(false)} aria-label="Cerrar menú" />
        <MobileMenu>
          <MobileMenuItem>
            <ScrollToSectionLink to="inicio"  onClick={() => setIsMobileOpen(false)}>Inicio</ScrollToSectionLink>
          </MobileMenuItem>
          <MobileDropdown>
            <button 
              isOpen={isMobileDropdownOpen}
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              Soluciones
            </button>

            <MobileDropdownItems isOpen={isMobileDropdownOpen}>
              <div>Chatbots Inteligentes</div>
              <div>Automatizaciones</div>
              <div>Integración con IA</div>
              <div>Consultorías y Mentorías</div>
            </MobileDropdownItems>
          </MobileDropdown>
          
          <MobileMenuItem>
            <ScrollToSectionLink to="nosotros" onClick={() => setIsMobileOpen(false)}>
              Sobre nosotros
            </ScrollToSectionLink>
          </MobileMenuItem>
          
          <MobileMenuItem>
            <RouterLink to="/blog/" onClick={() => setIsMobileOpen(false)}>
              Blog
            </RouterLink>
          </MobileMenuItem>
          
          <MobileCTA>
            <ScrollToSectionLink to="contacto"  onClick={() => setIsMobileOpen(false)}>Hablemos</ScrollToSectionLink>
          </MobileCTA>
        </MobileMenu>
      </MobileMenuWrapper>
    </Nav>
  );
}