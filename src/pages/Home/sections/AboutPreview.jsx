import Container from '../../../components/common/Container';
import Button from '../../../components/common/Button';
import Icon from '../../../components/common/Icon';

const points = [
  { icon: 'shield', text: 'Compatibilidad correcta por marca y modelo' },
  { icon: 'box', text: 'Disponibilidad real reflejada en cada producto' },
  { icon: 'wrench', text: 'Atención personalizada para tu vehículo' },
];

export default function AboutPreview() {
  return (
    <section className="border-t border-border bg-bg-secondary py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue">Sobre MetroAutos</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Especialistas en UTV, repuestos y mantenimiento en Nicaragua
          </h2>
          <p className="mt-4 text-text-secondary">
            En MetroAutos Nicaragua nos enfocamos en ofrecer partes, accesorios y productos de mantenimiento
            para vehículos UTV y off-road, ayudando a mantener tu unidad lista para cualquier terreno.
          </p>
          <Button to="/nosotros" variant="outline" className="mt-6">
            Conocer más
          </Button>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point.text} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                <Icon name={point.icon} className="h-5 w-5" />
              </div>
              <span className="text-sm text-white">{point.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
