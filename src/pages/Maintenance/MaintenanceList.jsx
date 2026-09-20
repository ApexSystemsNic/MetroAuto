import { useMemo, useState } from 'react';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import FilterSelect from '../../components/filters/FilterSelect';
import ProductGrid from '../../components/products/ProductGrid';
import { useSeo } from '../../hooks/useSeo';
import {
  getAvailableVehicleBrands,
  getAvailableVehicleModels,
  getAvailableSubcategories,
  filterProducts,
} from '../../services/productService';

const MAINTENANCE_CATEGORY = 'mantenimiento';

// Flujo independiente de Repuestos: Marca -> Modelo -> Producto de
// mantenimiento, acotado siempre a category === 'mantenimiento'.
export default function MaintenanceList() {
  useSeo(
    'Productos de Mantenimiento UTV | MetroParts Nicaragua',
    'Filtros de aire, bandas, lubricación y productos de mantenimiento preventivo para UTV en MetroParts Nicaragua.'
  );

  const [vehicleBrand, setVehicleBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [subcategory, setSubcategory] = useState(null);

  const brands = useMemo(() => getAvailableVehicleBrands({ category: MAINTENANCE_CATEGORY }), []);
  const models = useMemo(
    () => getAvailableVehicleModels(vehicleBrand, { category: MAINTENANCE_CATEGORY }),
    [vehicleBrand]
  );
  const subcategories = useMemo(
    () => getAvailableSubcategories({ category: MAINTENANCE_CATEGORY, vehicleBrand, model }),
    [vehicleBrand, model]
  );

  const results = useMemo(
    () => filterProducts({ vehicleBrand, model, category: MAINTENANCE_CATEGORY, subcategory }),
    [vehicleBrand, model, subcategory]
  );

  function handleBrandChange(value) {
    setVehicleBrand(value);
    setModel(null);
    setSubcategory(null);
  }

  function handleModelChange(value) {
    setModel(value);
    setSubcategory(null);
  }

  function clearFilters() {
    setVehicleBrand(null);
    setModel(null);
    setSubcategory(null);
  }

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'Mantenimiento' }]} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">Mantenimiento</h1>
        <p className="mt-2 max-w-2xl text-text-secondary">
          Selecciona la marca y el modelo de tu vehículo para ver únicamente los productos de mantenimiento
          compatibles.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 rounded-xl border border-border bg-bg-light p-5 sm:grid-cols-3">
        <FilterSelect
          label="Marca"
          value={vehicleBrand}
          onChange={handleBrandChange}
          placeholder="Selecciona una marca"
          options={brands.map((brand) => ({ value: brand.id, label: brand.name }))}
        />
        <FilterSelect
          label="Modelo"
          value={model}
          onChange={handleModelChange}
          placeholder={vehicleBrand ? 'Selecciona un modelo' : 'Elige una marca primero'}
          options={models.map((item) => ({ value: item, label: item }))}
          disabled={!vehicleBrand}
        />
        <FilterSelect
          label="Producto de mantenimiento"
          value={subcategory}
          onChange={setSubcategory}
          placeholder="Todos"
          options={subcategories.map((item) => ({ value: item, label: item }))}
        />
      </div>

      <p className="mb-5 text-sm text-text-secondary">{results.length} producto(s)</p>

      <ProductGrid products={results} onClearFilters={clearFilters} />
    </Container>
  );
}
