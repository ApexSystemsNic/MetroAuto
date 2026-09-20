import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavLogo from './NavLogo';
import Icon from '../common/Icon';
import Button from '../common/Button';
import { siteInfo, buildWhatsAppUrl } from '../../data/siteInfo';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/utv', label: 'UTV' },
  { to: '/repuestos', label: 'Repuestos' },
  { to: '/mantenimiento', label: 'Mantenimiento' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
    `text-sm font-semibold transition-colors ${isActive ? 'text-blue' : 'text-white/80 hover:text-white'}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? 'border-border bg-bg/95 backdrop-blur-sm' : 'border-transparent bg-bg'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLogo className="h-16" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={buildWhatsAppUrl(`Hola, me gustaría más información sobre los productos de ${siteInfo.name}.`)} variant="whatsapp" size="sm">
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-border bg-bg px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-white/5">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base font-semibold ${isActive ? 'text-blue' : 'text-white'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button
            href={buildWhatsAppUrl(`Hola, me gustaría más información sobre los productos de ${siteInfo.name}.`)}
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
