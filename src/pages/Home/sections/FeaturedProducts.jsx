import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import Button from '../../../components/common/Button';
import ProductGrid from '../../../components/products/ProductGrid';
import { getFeaturedProducts } from '../../../services/productService';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(8);

  return (
    <section className="border-t border-border bg-bg-light py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Catálogo" title="Productos destacados" className="mb-0" />
          <Button to="/productos" variant="outline" size="sm" className="mb-8">
            Ver catálogo completo
          </Button>
        </div>
        <ProductGrid products={featured} />
      </Container>
    </section>
  );
}
