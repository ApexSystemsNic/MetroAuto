import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../common/Container';
import Breadcrumb from '../common/Breadcrumb';
import SearchBar from '../common/SearchBar';
import ProductGrid from './ProductGrid';
import BrandFilter from '../filters/BrandFilter';
import CategoryFilter from '../filters/CategoryFilter';
import ModelFilter from '../filters/ModelFilter';
import StockFilter from '../filters/StockFilter';
import { getStockStatus } from '../../utils/stock';

// Vista de catálogo reutilizada por Repuestos y Mantenimiento. Cada página
// le pasa su propio `service` (instancia independiente de catalogService),
// por lo que ambos catálogos nunca comparten datos ni resultados de filtrado.
export default function ProductCatalog({ service, basePath, title, description, breadcrumbLabel }) {
  const [searchParams] = useSearchParams();
  const [brand, setBrand] = useState(searchParams.get('marca'));
  const [category, setCategory] = useState(searchParams.get('categoria'));
  const [model, setModel] = useState(searchParams.get('modelo'));
  const [stock, setStock] = useState(null);
  const queryFromSearch = searchParams.get('buscar');

  const brands = useMemo(() => service.getAvailableBrands(), [service]);
  const categories = useMemo(() => service.getAvailableCategories(brand), [service, brand]);
  const models = useMemo(() => service.getAvailableModels(brand, category), [service, brand, category]);

  const results = useMemo(() => {
    const base = queryFromSearch ? service.search(queryFromSearch) : service.filter({ brand, category, model });
    if (!stock) return base;
    return base.filter((product) => getStockStatus(product.stock) === stock);
  }, [service, brand, category, model, stock, queryFromSearch]);

  function handleBrandChange(value) {
    setBrand(value);
    setCategory(null);
    setModel(null);
  }

  function handleCategoryChange(value) {
    setCategory(value);
    setModel(null);
  }

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: breadcrumbLabel }]} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-text-secondary">{description}</p>
      </div>

      <div className="mb-6">
        <SearchBar />
      </div>

      {queryFromSearch ? (
        <p className="mb-6 text-sm text-text-secondary">
          Resultados de búsqueda para <span className="font-semibold text-white">“{queryFromSearch}”</span>
        </p>
      ) : (
        <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-4">
          <BrandFilter value={brand} onChange={handleBrandChange} brands={brands} />
          <CategoryFilter value={category} onChange={handleCategoryChange} categories={categories} />
          <ModelFilter value={model} onChange={setModel} models={models} />
          <StockFilter value={stock} onChange={setStock} label="Existencias" />
        </div>
      )}

      <p className="mb-5 text-sm text-text-secondary">{results.length} producto(s)</p>

      <ProductGrid products={results} basePath={basePath} />
    </Container>
  );
}
