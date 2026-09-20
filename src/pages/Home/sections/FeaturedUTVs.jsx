import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import Button from '../../../components/common/Button';
import UTVGrid from '../../../components/utv/UTVGrid';
import { getUTVs } from '../../../services/utvService';

export default function FeaturedUTVs() {
  const featured = getUTVs().slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Catálogo" title="UTV destacados" className="mb-0" />
          <Button to="/utv" variant="outline" size="sm" className="mb-8">
            Ver UTV
          </Button>
        </div>
        <UTVGrid utvs={featured} />
      </Container>
    </section>
  );
}
