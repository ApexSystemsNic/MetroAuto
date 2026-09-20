import Button from '../components/common/Button';
import Container from '../components/common/Container';
import { useSeo } from '../hooks/useSeo';

export default function NotFound() {
  useSeo('Página no encontrada | MetroParts Nicaragua');

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-red">Error 404</p>
      <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Esta página no existe</h1>
      <p className="mt-3 max-w-md text-text-secondary">
        Verifica el enlace o vuelve al inicio para seguir explorando UTV, repuestos y productos de mantenimiento.
      </p>
      <Button to="/" className="mt-8">
        Volver al inicio
      </Button>
    </Container>
  );
}
