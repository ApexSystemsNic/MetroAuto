import { Link } from 'react-router-dom';
import logo from '../../assets/logos/metroparts-logo.png';

export default function NavLogo({ className = 'h-14' }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="MetroParts Nicaragua - Inicio">
      <img src={logo} alt="MetroParts Nicaragua - ¡Tu auto, nuestro compromiso!" className={`w-auto ${className}`} />
    </Link>
  );
}
