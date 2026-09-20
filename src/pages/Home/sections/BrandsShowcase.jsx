import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import { brands } from '../../../data/brands';

export default function BrandsShowcase() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading align="center" eyebrow="Marcas" title="Trabajamos con las principales marcas de UTV" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-4 text-center font-display text-sm font-bold uppercase tracking-wide text-text-secondary transition-colors hover:border-blue/40 hover:text-white"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
