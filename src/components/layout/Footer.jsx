import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Icon from '../common/Icon';
import NavLogo from './NavLogo';
import { businessConfig, buildWhatsAppUrl } from '../../config/business';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/utv', label: 'UTV' },
  { to: '/productos', label: 'Repuestos y Accesorios' },
  { to: '/mantenimiento', label: 'Mantenimiento' },
  { to: '/nosotros', label: 'Nosotros' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-white p-3">
            <NavLogo className="h-14" />
          </div>
          <p className="mt-4 text-sm font-semibold text-white/80">{businessConfig.shortName}</p>
          <p className="mt-1 text-sm text-white/60">{businessConfig.slogan}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Navegación</h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-white/70 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Contacto</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 flex-shrink-0 text-red" />
              <a href={`tel:${businessConfig.contact.whatsapp}`} className="hover:text-white">
                {businessConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="whatsapp" className="h-4 w-4 flex-shrink-0 text-red" />
              <a
                href={buildWhatsAppUrl(`Hola ${businessConfig.shortName}, me gustaría más información sobre sus productos.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="instagram" className="h-4 w-4 flex-shrink-0 text-red" />
              <a href={businessConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {businessConfig.instagram.username}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Ubicación</h3>
          <p className="text-sm text-white/70">{businessConfig.googleMaps.address ?? businessConfig.city}</p>
          <a
            href={businessConfig.googleMaps.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80"
          >
            Cómo llegar
            <Icon name="externalLink" className="h-4 w-4" />
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} {businessConfig.name}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
