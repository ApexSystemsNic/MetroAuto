import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProductCatalog from '../../components/products/ProductCatalog';
import { useSeo } from '../../hooks/useSeo';

export default function ProductsList() {
  useSeo(
    'Repuestos y Accesorios UTV | MetroParts Nicaragua',
    'Repuestos y accesorios para UTV y vehículos off-road: iluminación, audio, winches, mantenimiento y más en MetroParts Nicaragua.'
  );

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'Repuestos y Accesorios' }]} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">Repuestos y Accesorios</h1>
        <p className="mt-2 max-w-2xl text-text-secondary">
          Filtra por marca de vehículo, modelo, categoría o marca de producto para encontrar lo que necesitas.
        </p>
      </div>

      <ProductCatalog />
    </Container>
  );
}
