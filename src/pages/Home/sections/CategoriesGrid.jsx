import { Link } from 'react-router-dom';
import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import Icon from '../../../components/common/Icon';
import { categories } from '../../../data/categories';

export default function CategoriesGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Catálogo"
          title="Explora por categoría"
          description="Cada categoría te lleva directo a los productos disponibles."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/productos?categoria=${category.id}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-6 text-center transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-red group-hover:text-white">
                <Icon name={category.icon} className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-text">{category.name}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
