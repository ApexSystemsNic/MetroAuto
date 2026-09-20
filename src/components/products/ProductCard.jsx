import { Link } from 'react-router-dom';
import ImagePlaceholder from '../common/ImagePlaceholder';
import StockBadge from '../common/StockBadge';
import PriceDisplay from '../common/PriceDisplay';
import Icon from '../common/Icon';
import { getVehicleBrandById } from '../../data/vehicleBrands';
import { getCategoryIcon } from '../../utils/categoryIcons';
import { whatsAppUrlForProduct } from '../../utils/whatsapp';

function compatibilitySummary(product) {
  if (product.compatibilityType === 'universal') return 'Universal para UTV';
  return product.compatibility
    .map((entry) => getVehicleBrandById(entry.brand)?.name ?? entry.brand)
    .join(' / ');
}

export default function ProductCard({ product }) {
  const detailPath = `/producto/${product.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg">
      <Link to={detailPath} className="block">
        <ImagePlaceholder
          icon={getCategoryIcon(product.category, product.subcategory)}
          label={product.name}
          className="aspect-square w-full"
          showCatalogHint
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-red">
            {product.productBrand ?? 'Genérico'}
          </span>
          <StockBadge stock={product.stock} showCount={false} />
        </div>

        <Link to={detailPath}>
          <h3 className="font-semibold leading-snug text-text group-hover:text-navy">{product.name}</h3>
        </Link>

        <p className="line-clamp-2 text-xs text-text-secondary">
          Compatible con: <span className="text-text">{compatibilitySummary(product)}</span>
        </p>

        <div className="mt-auto pt-2">
          <PriceDisplay priceNio={product.priceNio} size="sm" />
        </div>

        <div className="flex gap-2 pt-1">
          <Link
            to={detailPath}
            className="flex-1 rounded-lg border border-border py-2.5 text-center text-xs font-semibold text-navy transition-colors hover:border-navy"
          >
            Ver producto
          </Link>
          <a
            href={whatsAppUrlForProduct(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-500 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-green-600"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
