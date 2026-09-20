import Container from '../../../components/common/Container';
import WhatsAppButton from '../../../components/common/WhatsAppButton';

export default function WhatsAppCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(50% 80% at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 70%)',
            }}
          />
          <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
            ¿Tienes dudas sobre un producto o vehículo?
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-text-secondary">
            Escríbenos por WhatsApp y te ayudamos a confirmar compatibilidad, precio y disponibilidad.
          </p>
          <div className="relative mt-7 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
