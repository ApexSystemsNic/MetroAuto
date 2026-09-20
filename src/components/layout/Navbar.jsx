import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavLogo from './NavLogo';
import Icon from '../common/Icon';
import Button from '../common/Button';
import SearchBar from '../common/SearchBar';
import { businessConfig, buildWhatsAppUrl } from '../../config/business';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/utv', label: 'UTV' },
  { to: '/productos', label: 'Repuestos y Accesorios' },
  { to: '/mantenimiento', label: 'Mantenimiento' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/ubicacion', label: 'Ubicación' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold whitespace-nowrap transition-colors ${isActive ? 'text-red' : 'text-navy/80 hover:text-navy'}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-200 ${
        scrolled ? 'border-border shadow-sm' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLogo className="h-16" />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-label="Buscar"
            aria-expanded={searchOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-bg-light"
          >
            <Icon name="search" className="h-5 w-5" />
          </button>
          <Button href={buildWhatsAppUrl(`Hola ${businessConfig.shortName}, me gustaría más información sobre sus productos.`)} variant="whatsapp" size="sm">
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-label="Buscar"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy"
          >
            <Icon name="search" className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div className="border-t border-border bg-white px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <SearchBar />
          </div>
        </div>
      ) : null}

      {open ? (
        <nav aria-label="Navegación móvil" className="border-t border-border bg-white px-4 pb-6 pt-2 xl:hidden">
          <ul className="flex flex-col divide-y divide-border">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base font-semibold ${isActive ? 'text-red' : 'text-navy'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button
            href={buildWhatsAppUrl(`Hola ${businessConfig.shortName}, me gustaría más información sobre sus productos.`)}
            variant="whatsapp"
            className="mt-4 w-full"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Escribir por WhatsApp
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
