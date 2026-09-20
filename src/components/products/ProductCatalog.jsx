import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../common/SearchBar';
import Icon from '../common/Icon';
import ProductGrid from './ProductGrid';
import BrandFilter from '../filters/BrandFilter';
import VehicleModelFilter from '../filters/VehicleModelFilter';
import CategoryFilter from '../filters/CategoryFilter';
import ProductBrandFilter from '../filters/ProductBrandFilter';
import PriceFilter from '../filters/PriceFilter';
import {
  filterProducts,
  sortProducts,
  searchProducts,
  getAvailableVehicleBrands,
  getAvailableVehicleModels,
  getAvailableCategories,
  getAvailableProductBrands,
} from '../../services/productService';

const sortOptions = [
  { value: 'featured', label: 'Destacados' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'name-asc', label: 'Nombre A-Z' },
];

// Catálogo completo de Repuestos y Accesorios: sidebar de filtros en
// escritorio, drawer en móvil. Todos los filtros son dependientes y solo
// muestran opciones que existen realmente en el catálogo.
export default function ProductCatalog() {
  const [searchParams] = useSearchParams();
  const queryFromSearch = searchParams.get('buscar');

  const [vehicleBrand, setVehicleBrand] = useState(searchParams.get('marca'));
  const [model, setModel] = useState(searchParams.get('modelo'));
  const [category, setCategory] = useState(searchParams.get('categoria'));
  const [productBrand, setProductBrand] = useState(null);
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [sortKey, setSortKey] = useState('featured');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const vehicleBrands = useMemo(() => getAvailableVehicleBrands(), []);
  const models = useMemo(() => getAvailableVehicleModels(vehicleBrand), [vehicleBrand]);
  const categories = useMemo(() => getAvailableCategories({ vehicleBrand, model }), [vehicleBrand, model]);
  const productBrands = useMemo(
    () => getAvailableProductBrands({ vehicleBrand, model, category }),
    [vehicleBrand, model, category]
  );

  const baseResults = useMemo(() => {
    if (queryFromSearch) return searchProducts(queryFromSearch);
    return filterProducts({ vehicleBrand, model, category, productBrand, priceMin, priceMax });
  }, [queryFromSearch, vehicleBrand, model, category, productBrand, priceMin, priceMax]);

  const results = useMemo(() => sortProducts(baseResults, sortKey), [baseResults, sortKey]);

  function handleBrandChange(value) {
    setVehicleBrand(value);
    setModel(null);
    setCategory(null);
    setProductBrand(null);
  }

  function handleModelChange(value) {
    setModel(value);
    setCategory(null);
    setProductBrand(null);
  }

  function handleCategoryChange(value) {
    setCategory(value);
    setProductBrand(null);
  }

  function clearFilters() {
    setVehicleBrand(null);
    setModel(null);
    setCategory(null);
    setProductBrand(null);
    setPriceMin(null);
    setPriceMax(null);
  }

  const filtersPanel = (
    <div className="space-y-5">
      <BrandFilter value={vehicleBrand} onChange={handleBrandChange} brands={vehicleBrands} />
      <VehicleModelFilter value={model} onChange={handleModelChange} models={models} disabled={!vehicleBrand} />
      <CategoryFilter value={category} onChange={handleCategoryChange} categories={categories} />
      <ProductBrandFilter value={productBrand} onChange={setProductBrand} brands={productBrands} />
      <PriceFilter min={priceMin} max={priceMax} onChangeMin={setPriceMin} onChangeMax={setPriceMax} />
      <button
        type="button"
        onClick={clearFilters}
        className="w-full rounded-lg border border-border py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-bg-light"
      >
        Limpiar filtros
      </button>
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-border bg-white p-5">{filtersPanel}</div>
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Abrir filtros"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy lg:hidden"
              >
                <Icon name="filter" className="h-4 w-4" />
                Filtros
              </button>
              <p className="text-sm text-text-secondary">{results.length} producto(s)</p>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <span className="hidden text-text-secondary sm:inline">Ordenar:</span>
              <select
                value={sortKey}
                onChange={(event) => setSortKey(event.target.value)}
                className="rounded-lg border border-border bg-white py-2 pl-3 pr-8 text-sm text-text focus:border-navy focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {queryFromSearch ? (
            <p className="mb-5 text-sm text-text-secondary">
              Resultados de búsqueda para <span className="font-semibold text-text">“{queryFromSearch}”</span>
            </p>
          ) : null}

          <ProductGrid products={results} onClearFilters={clearFilters} />
        </div>
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy-dark/50" onClick={() => setDrawerOpen(false)} />
          <div className="absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-text">Filtros</h2>
              <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Cerrar filtros">
                <Icon name="close" className="h-6 w-6 text-text" />
              </button>
            </div>
            {filtersPanel}
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="mt-5 w-full rounded-lg bg-navy py-3 text-sm font-semibold text-white"
            >
              Ver {results.length} resultado(s)
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
