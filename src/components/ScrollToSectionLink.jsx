import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToSectionLink = ({ to, children, onClick, ...rest }) => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const handleClick = () => {
    if (location.pathname === '/') {
      // Scroll normally if already on home page
      if (onClick) onClick();
    } else {
      // Navigate to homepage with hash
      navigate(`/#${to}`);
    }
  };

  return location.pathname === '/' ? (
    <ScrollLink to={to} smooth={true} duration={500} offset={-50} onClick={onClick} {...rest}>
      {children}
    </ScrollLink>
  ) : (
    <span onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </span>
  );
};

export default ScrollToSectionLink;
