import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import LocationCard from '../../../components/common/LocationCard';
import Button from '../../../components/common/Button';

export default function LocationPreview() {
  return (
    <section className="border-t border-border bg-bg-secondary py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Ubicación" title="Visítanos en Managua" className="mb-4" />
          <p className="text-text-secondary">
            Atendemos en Managua, Nicaragua. Contáctanos por WhatsApp o teléfono para coordinar tu visita
            o consultar por un producto específico.
          </p>
          <Button to="/contacto" variant="outline" className="mt-6">
            Ver información de contacto
          </Button>
        </div>
        <LocationCard />
      </Container>
    </section>
  );
}
