import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import ScrollToSectionLink from './ScrollToSectionLink';
import { Link as RouterLink } from 'react-router-dom';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen, height }) => (isOpen ? `${height}px` : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: max-height 0.4s ease, opacity 0.3s ease;
  position: absolute;
  right: 2rem;
  top: 100%;
  width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem;
  gap: 1rem;
`;

const MenuItem = styled.li`
  cursor: pointer;
  color: #444;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #0f62fe;
  }
`;

const DesktopMenu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [isOpen]);

  // 👉 Detectar clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);


  return (
    <Nav>
      <RouterLink to="/"><Logo src="/react-site-flussia/assets/logo-flussia.png" alt="Logo Flussia" /></RouterLink>

      <Hamburger ref={hamburgerRef} onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
        <span />
        <span />
        <span />
      </Hamburger>

      <DesktopMenu>
        <MenuItem>
          <ScrollToSectionLink to="inicio">Inicio</ScrollToSectionLink>
        </MenuItem>
        <MenuItem>
          <ScrollToSectionLink to="nosotros">Nosotros</ScrollToSectionLink>
        </MenuItem>
        <MenuItem>
          <RouterLink to="/blog/">Blog</RouterLink>
        </MenuItem>
        <MenuItem>
          <ScrollToSectionLink to="contacto">Contacto</ScrollToSectionLink>
        </MenuItem>
      </DesktopMenu>

      <MobileMenuWrapper isOpen={isOpen} height={menuHeight}>
        <Menu ref={menuRef}>
          <MenuItem>
            <ScrollToSectionLink to="inicio" onClick={() => setIsOpen(false)}>Inicio</ScrollToSectionLink>
          </MenuItem>
          <MenuItem>
            <ScrollToSectionLink to="nosotros" onClick={() => setIsOpen(false)}>Nosotros</ScrollToSectionLink>
          </MenuItem>
          <MenuItem>
            <RouterLink to="/blog" onClick={() => setIsOpen(false)}>Blog</RouterLink>
          </MenuItem>
          <MenuItem>
            <ScrollToSectionLink to="contacto" onClick={() => setIsOpen(false)}>Contacto</ScrollToSectionLink>
          </MenuItem>
        </Menu>
      </MobileMenuWrapper>
    </Nav>
  );
}
