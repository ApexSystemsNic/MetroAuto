import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Gallery from '../../components/common/Gallery';
import StockBadge from '../../components/common/StockBadge';
import PriceDisplay from '../../components/common/PriceDisplay';
import CompatibilityList from '../../components/common/CompatibilityList';
import Icon from '../../components/common/Icon';
import ProductGrid from '../../components/products/ProductGrid';
import { useSeo } from '../../hooks/useSeo';
import { getProductBySlug, getRelatedProducts } from '../../services/productService';
import { getCategoryById } from '../../data/categories';
import { getCategoryIcon } from '../../utils/categoryIcons';
import { whatsAppUrlForProduct } from '../../utils/whatsapp';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  useSeo(
    product ? `${product.name} | MetroParts Nicaragua` : 'Producto | MetroParts Nicaragua',
    product?.description
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <Navigate to="/productos" replace />;

  const category = getCategoryById(product.category);
  const related = getRelatedProducts(product);

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb
        items={[
          { label: 'Inicio', to: '/' },
          { label: 'Repuestos y Accesorios', to: '/productos' },
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Gallery
          images={product.images}
          icon={getCategoryIcon(product.category, product.subcategory)}
          title={product.name}
        />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red">
              {product.productBrand ?? 'Genérico'}
            </span>
            <span className="rounded-full bg-bg-light px-2.5 py-1 text-xs font-semibold text-text-secondary">
              {category?.name} · {product.subcategory}
            </span>
            <StockBadge stock={product.stock} />
          </div>

          <h1 className="mt-3 text-3xl font-bold text-text sm:text-4xl">{product.name}</h1>

          <p className="mt-2 text-sm text-text-secondary">
            {product.sku ? (
              <>
                SKU: <span className="text-text">{product.sku}</span>
              </>
            ) : null}
            {product.oemCode ? (
              <>
                {product.sku ? ' · ' : ''}Código OEM: <span className="text-text">{product.oemCode}</span>
              </>
            ) : null}
          </p>

          <p className="mt-4 text-text-secondary">{product.description}</p>

          <div className="mt-6">
            <PriceDisplay priceNio={product.priceNio} size="lg" showRate />
          </div>

          <a
            href={whatsAppUrlForProduct(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-600 sm:w-auto"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-5">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-text-secondary">Descripción técnica</h2>
          <p className="text-sm text-text">{product.technicalDescription}</p>
          {product.specifications && Object.keys(product.specifications).length > 0 ? (
            <dl className="mt-4 space-y-2 border-t border-border pt-4">
              {Object.entries(product.specifications).map(([label, value]) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <dt className="text-text-secondary">{label}</dt>
                  <dd className="font-semibold text-text">{value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <CompatibilityList compatibilityType={product.compatibilityType} compatibility={product.compatibility} />
      </div>

      {related.length > 0 ? (
        <div className="mt-14">
          <h2 className="mb-5 text-lg font-bold text-text">También podría interesarte</h2>
          <ProductGrid products={related} />
        </div>
      ) : null}
    </Container>
  );
}
