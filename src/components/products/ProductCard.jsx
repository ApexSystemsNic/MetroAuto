import { Link } from 'react-router-dom';
import ImagePlaceholder from '../common/ImagePlaceholder';
import StockBadge from '../common/StockBadge';
import Icon from '../common/Icon';
import { getBrandById } from '../../data/brands';
import { getCategoryIcon } from '../../utils/categoryIcons';
import { formatPrice } from '../../utils/format';
import { whatsAppUrlForProduct } from '../../utils/whatsapp';

export default function ProductCard({ product, basePath }) {
  const brand = getBrandById(product.brand);
  const detailPath = `${basePath}/${product.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-black/40">
      <Link to={detailPath} className="block">
        <ImagePlaceholder
          icon={getCategoryIcon(product.category)}
          label={product.name}
          className="aspect-square w-full"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-blue">{brand?.name}</span>
          <StockBadge stock={product.stock} showCount={false} />
        </div>

        <Link to={detailPath}>
          <h3 className="font-semibold leading-snug text-white group-hover:text-blue">{product.name}</h3>
        </Link>

        <p className="text-xs text-text-secondary">
          Código: <span className="text-white/80">{product.sku}</span>
        </p>

        <p className="line-clamp-2 text-xs text-text-secondary">Compatible con: {product.compatibility}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-white">{formatPrice(product.price)}</span>
        </div>

        <div className="flex gap-2 pt-1">
          <Link
            to={detailPath}
            className="flex-1 rounded-lg border border-white/15 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:border-blue hover:text-blue"
          >
            Ver detalles
          </Link>
          <a
            href={whatsAppUrlForProduct(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-500 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-green-600"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
