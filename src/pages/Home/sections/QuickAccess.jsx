import Container from '../../../components/common/Container';
import Button from '../../../components/common/Button';
import Icon from '../../../components/common/Icon';

const items = [
  {
    icon: 'truck',
    title: 'UTV',
    description: 'Explora nuestras unidades disponibles.',
    to: '/utv',
    cta: 'Ver UTV',
    accent: 'text-red',
  },
  {
    icon: 'cog',
    title: 'Repuestos',
    description: 'Encuentra repuestos compatibles con tu vehículo.',
    to: '/repuestos',
    cta: 'Buscar repuestos',
    accent: 'text-blue',
  },
  {
    icon: 'wrench',
    title: 'Mantenimiento',
    description: 'Aceites, filtros, lubricantes y productos especializados.',
    to: '/mantenimiento',
    cta: 'Ver productos',
    accent: 'text-green-400',
  },
];

export default function QuickAccess() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-white/20"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ${item.accent}`}>
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{item.description}</p>
              <Button to={item.to} variant="outline" size="sm" className="mt-5 self-start">
                {item.cta}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
