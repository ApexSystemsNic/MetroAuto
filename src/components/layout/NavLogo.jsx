import { Link } from 'react-router-dom';
import logo from '../../assets/logos/metroautos-logo.webp';

export default function NavLogo({ className = 'h-12' }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="MetroAutos Nicaragua - Inicio">
      <img src={logo} alt="MetroAutos Nicaragua - Partes y Accesorios" className={`w-auto ${className}`} />
    </Link>
  );
}
