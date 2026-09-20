import Container from '../../../components/common/Container';
import WhatsAppButton from '../../../components/common/WhatsAppButton';

export default function WhatsAppCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-border bg-white px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">¿No encontraste lo que buscas?</h2>
          <p className="mx-auto mt-3 max-w-lg text-text-secondary">
            Escríbenos y te ayudamos a encontrarlo.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
