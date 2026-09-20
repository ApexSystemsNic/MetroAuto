import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Icon from '../common/Icon';
import NavLogo from './NavLogo';
import { siteInfo, buildWhatsAppUrl } from '../../data/siteInfo';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/utv', label: 'UTV' },
  { to: '/repuestos', label: 'Repuestos' },
  { to: '/mantenimiento', label: 'Mantenimiento' },
  { to: '/nosotros', label: 'Nosotros' },
];

const socials = [
  { key: 'facebook', label: 'Facebook', href: siteInfo.facebook },
  { key: 'instagram', label: 'Instagram', href: siteInfo.instagram },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: buildWhatsAppUrl(`Hola, me gustaría más información sobre los productos de ${siteInfo.name}.`),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <NavLogo className="h-12" />
          <p className="mt-4 text-sm text-text-secondary">
            {siteInfo.tagline}
            <br />
            Nicaragua
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Navegación</h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-text-secondary transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Contacto</h3>
          <ul className="space-y-2.5 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 flex-shrink-0 text-blue" />
              <a href={`tel:${siteInfo.whatsapp}`} className="hover:text-white">
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mapPin" className="h-4 w-4 flex-shrink-0 text-red" />
              {siteInfo.city}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Redes</h3>
          <ul className="space-y-2.5">
            {socials.map((social) => (
              <li key={social.key}>
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span className="text-sm text-text-secondary/60">{social.label} (próximamente)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container>
          <p className="text-center text-xs text-text-secondary">
            © {new Date().getFullYear()} {siteInfo.name}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
