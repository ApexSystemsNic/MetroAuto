import ProductCatalog from '../../components/products/ProductCatalog';
import { useSeo } from '../../hooks/useSeo';
import { partsService } from '../../services/productService';

export default function RepuestosList() {
  useSeo(
    'Repuestos para UTV en Nicaragua | MetroAutos',
    'Repuestos compatibles para UTV y vehículos off-road: motor, frenos, suspensión, filtros y más en MetroAutos Nicaragua.'
  );

  return (
    <ProductCatalog
      service={partsService}
      basePath="/repuestos"
      breadcrumbLabel="Repuestos"
      title="Repuestos"
      description="Filtra por marca, categoría y modelo para encontrar repuestos compatibles con tu vehículo."
    />
  );
}
