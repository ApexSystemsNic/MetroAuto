import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Gallery from '../../components/common/Gallery';
import StockBadge from '../../components/common/StockBadge';
import CompatibilityList from '../../components/common/CompatibilityList';
import Icon from '../../components/common/Icon';
import ProductGrid from '../../components/products/ProductGrid';
import { useSeo } from '../../hooks/useSeo';
import { partsService, maintenanceService } from '../../services/productService';
import { getBrandById } from '../../data/brands';
import { getPartCategoryById } from '../../data/partCategories';
import { getMaintenanceCategoryById } from '../../data/maintenanceCategories';
import { getCategoryIcon } from '../../utils/categoryIcons';
import { formatPrice } from '../../utils/format';
import { whatsAppUrlForProduct } from '../../utils/whatsapp';

const services = {
  parts: { instance: partsService, getCategory: getPartCategoryById, breadcrumb: 'Repuestos' },
  maintenance: { instance: maintenanceService, getCategory: getMaintenanceCategoryById, breadcrumb: 'Mantenimiento' },
};

export default function ProductDetail({ basePath, service }) {
  const { id } = useParams();
  const { instance, getCategory, breadcrumb } = services[service];
  const product = instance.getById(id);

  useSeo(
    product ? `${product.name} | MetroAutos Nicaragua` : 'Producto | MetroAutos Nicaragua',
    product?.description
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <Navigate to={basePath} replace />;

  const brand = getBrandById(product.brand);
  const category = getCategory(product.category);
  const related = instance.getRelated(product);

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb
        items={[
          { label: 'Inicio', to: '/' },
          { label: breadcrumb, to: basePath },
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Gallery images={product.images} icon={getCategoryIcon(product.category)} title={product.name} />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue">{brand?.name}</span>
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-text-secondary">
              {category?.name}
            </span>
            <StockBadge stock={product.stock} />
          </div>

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{product.name}</h1>

          <p className="mt-2 text-sm text-text-secondary">
            SKU: <span className="text-white/80">{product.sku}</span>
            {product.oemCode ? (
              <>
                {' '}
                · Código OEM: <span className="text-white/80">{product.oemCode}</span>
              </>
            ) : null}
          </p>

          <p className="mt-4 text-text-secondary">{product.description}</p>

          <p className="mt-6 text-2xl font-bold text-white">{formatPrice(product.price)}</p>

          <a
            href={whatsAppUrlForProduct(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition-colors hover:bg-green-600 sm:w-auto"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-text-secondary">Descripción técnica</h2>
          <p className="text-sm text-white/90">{product.technicalDescription}</p>
          {product.specifications && Object.keys(product.specifications).length > 0 ? (
            <dl className="mt-4 space-y-2 border-t border-white/5 pt-4">
              {Object.entries(product.specifications).map(([label, value]) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <dt className="text-text-secondary">{label}</dt>
                  <dd className="font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <CompatibilityList brand={product.brand} models={product.models} years={product.years} />
      </div>

      {related.length > 0 ? (
        <div className="mt-14">
          <h2 className="mb-5 text-lg font-bold text-white">Productos relacionados</h2>
          <ProductGrid products={related} basePath={basePath} />
        </div>
      ) : null}
    </Container>
  );
}
