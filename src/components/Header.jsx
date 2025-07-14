import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: relative;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #333;
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
      <Logo>Flussia</Logo>

      <Hamburger ref={hamburgerRef} onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
        <span />
        <span />
        <span />
      </Hamburger>

      <DesktopMenu>
        <MenuItem>
        <ScrollLink to="inicio" smooth={true} duration={500} offset={-50}>Inicio</ScrollLink>
        </MenuItem>
        <MenuItem>
        <ScrollLink to="nosotros" smooth={true} duration={500} offset={-50}>Nosotros</ScrollLink>
        </MenuItem>
        <MenuItem>
        <RouterLink to="/blog">Blog</RouterLink>
        </MenuItem>
        <MenuItem>
        <ScrollLink to="contacto" smooth={true} duration={500} offset={-50}>Contacto</ScrollLink>
        </MenuItem>
      </DesktopMenu>

      <MobileMenuWrapper isOpen={isOpen} height={menuHeight}>
        <Menu ref={menuRef}>
          <MenuItem>
            <ScrollLink to="inicio" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>Inicio</ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink to="nosotros" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>Nosotros</ScrollLink>
          </MenuItem>
          <MenuItem>
            <RouterLink to="/blog" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>Blog</RouterLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink to="contacto" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>Contacto</ScrollLink>
          </MenuItem>
        </Menu>
      </MobileMenuWrapper>
    </Nav>
  );
}
