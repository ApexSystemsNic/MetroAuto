import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import Button from '../../../components/common/Button';
import ProductGrid from '../../../components/products/ProductGrid';
import { getFeaturedParts, getFeaturedMaintenance } from '../../../services/productService';

export default function FeaturedProducts() {
  const parts = getFeaturedParts(4);
  const maintenance = getFeaturedMaintenance(4);

  return (
    <section className="border-t border-border bg-bg-secondary py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Catálogo" title="Repuestos destacados" className="mb-0" />
          <Button to="/repuestos" variant="outline" size="sm" className="mb-8">
            Ver todos
          </Button>
        </div>
        <ProductGrid products={parts} basePath="/repuestos" />

        <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Catálogo" title="Mantenimiento destacado" className="mb-0" />
          <Button to="/mantenimiento" variant="outline" size="sm" className="mb-8">
            Ver todos
          </Button>
        </div>
        <ProductGrid products={maintenance} basePath="/mantenimiento" />
      </Container>
    </section>
  );
}
