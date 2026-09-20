import { Link } from 'react-router-dom';
import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import { getAvailableVehicleBrands } from '../../../services/productService';

export default function BrandsShowcase() {
  const brands = getAvailableVehicleBrands();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading align="center" eyebrow="Marcas" title="Encuentra productos para tu vehículo" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/productos?marca=${brand.id}`}
              className="flex h-20 items-center justify-center rounded-xl border border-border bg-white px-4 text-center font-display text-base font-bold uppercase tracking-wide text-navy transition-all hover:-translate-y-0.5 hover:border-red/40 hover:shadow-md"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
