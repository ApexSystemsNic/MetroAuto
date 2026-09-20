import ProductCatalog from '../../components/products/ProductCatalog';
import { useSeo } from '../../hooks/useSeo';
import { maintenanceService } from '../../services/productService';

export default function MantenimientoList() {
  useSeo(
    'Aceites y productos de mantenimiento UTV | MetroAutos Nicaragua',
    'Aceites, filtros, refrigerantes y productos de mantenimiento preventivo para UTV en MetroAutos Nicaragua.'
  );

  return (
    <ProductCatalog
      service={maintenanceService}
      basePath="/mantenimiento"
      breadcrumbLabel="Mantenimiento"
      title="Mantenimiento"
      description="Aceites, filtros, lubricantes y productos especializados según marca y modelo."
    />
  );
}
