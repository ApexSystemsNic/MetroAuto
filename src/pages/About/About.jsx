import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Icon from '../../components/common/Icon';
import Button from '../../components/common/Button';
import { useSeo } from '../../hooks/useSeo';

const commitments = [
  { icon: 'shield', title: 'Calidad', text: 'Repuestos y productos seleccionados pensando en el desempeño real de cada vehículo.' },
  { icon: 'check', title: 'Compatibilidad correcta', text: 'Cada producto se relaciona con la marca y el modelo con el que es compatible.' },
  { icon: 'box', title: 'Disponibilidad real', text: 'El estado de inventario mostrado refleja las existencias del producto.' },
  { icon: 'wrench', title: 'Atención personalizada', text: 'Te ayudamos directamente por WhatsApp a confirmar lo que tu vehículo necesita.' },
];

export default function About() {
  useSeo(
    'Nosotros | MetroAutos Nicaragua',
    'Conoce a MetroAutos Nicaragua, especialistas en UTV, repuestos, accesorios y mantenimiento en Managua.'
  );

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'Nosotros' }]} />

      <div className="mt-6 max-w-3xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue">Quiénes somos</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">MetroAutos Nicaragua</h1>
        <p className="mt-5 text-text-secondary">
          MetroAutos Nicaragua es una empresa ubicada en Managua dedicada a la venta de partes, repuestos,
          accesorios y productos de mantenimiento para vehículos UTV y off-road.
        </p>
        <p className="mt-4 text-text-secondary">
          Trabajamos con marcas como Honda, Polaris, Can-Am, Yamaha, Kawasaki y Suzuki, ayudando a mantener tu
          vehículo listo para cualquier terreno mediante repuestos compatibles y productos de mantenimiento
          preventivo.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-white">Nuestra especialización</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['UTV', 'Repuestos', 'Accesorios', 'Mantenimiento'].map((item) => (
            <div key={item} className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="font-display text-lg font-bold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-xl font-bold text-white">Nuestro compromiso</h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {commitments.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">¿Buscas algo para tu vehículo?</h2>
          <p className="mt-1 text-sm text-text-secondary">Escríbenos y te ayudamos a encontrarlo.</p>
        </div>
        <Button to="/contacto">Ir a Contacto</Button>
      </div>
    </Container>
  );
}
