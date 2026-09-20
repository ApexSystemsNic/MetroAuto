import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Icon from '../../components/common/Icon';
import Button from '../../components/common/Button';
import NavLogo from '../../components/layout/NavLogo';
import { useSeo } from '../../hooks/useSeo';
import { businessConfig } from '../../config/business';

const specialties = ['Repuestos', 'Accesorios', 'UTV', 'Equipamiento', 'Mantenimiento', 'Componentes especializados'];

const commitments = [
  { icon: 'shield', title: 'Calidad', text: 'Repuestos y accesorios seleccionados pensando en el desempeño real de cada vehículo.' },
  { icon: 'check', title: 'Compatibilidad correcta', text: 'Cada producto se relaciona con la marca y el modelo con el que es compatible.' },
  { icon: 'box', title: 'Disponibilidad', text: 'Trabajamos para mantener información de existencias lo más clara posible.' },
  { icon: 'whatsapp', title: 'Atención personalizada', text: 'Te ayudamos directamente por WhatsApp a confirmar lo que tu vehículo necesita.' },
];

export default function About() {
  useSeo(
    'Nosotros | MetroParts Nicaragua',
    'Conoce a MetroParts Nicaragua: repuestos, accesorios, UTV, equipamiento y mantenimiento. ¡Tu auto, nuestro compromiso!'
  );

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'Nosotros' }]} />

      <div className="mt-6 max-w-3xl">
        <NavLogo className="h-16" />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-red">{businessConfig.slogan}</p>
        <h1 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">{businessConfig.name}</h1>
        <p className="mt-5 text-text-secondary">
          MetroParts Nicaragua trabaja con repuestos, accesorios, equipamiento y productos de mantenimiento
          para vehículos UTV y off-road, ayudando a mantener tu vehículo listo para cualquier terreno.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-navy">Nuestra especialización</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {specialties.map((item) => (
            <div key={item} className="rounded-xl border border-border bg-white p-5 text-center">
              <p className="font-display text-sm font-bold text-navy">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-xl font-bold text-navy">Nuestro compromiso</h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {commitments.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-white p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start gap-4 rounded-xl border border-border bg-bg-light p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-navy">¿Buscas algo para tu vehículo?</h2>
          <p className="mt-1 text-sm text-text-secondary">Escríbenos y te ayudamos a encontrarlo.</p>
        </div>
        <Button to="/contacto">Ir a Contacto</Button>
      </div>
    </Container>
  );
}
