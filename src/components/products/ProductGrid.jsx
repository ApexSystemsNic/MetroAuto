import ProductCard from './ProductCard';
import EmptyState from '../common/EmptyState';

export default function ProductGrid({ products, basePath }) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon="search"
        title="No hay productos con esos filtros"
        description="Prueba con otra combinación de marca, categoría o modelo."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} basePath={basePath} />
      ))}
    </div>
  );
}
