import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { searchProducts } from '../../services/productService';
import { getUTVs } from '../../services/utvService';
import { getVehicleBrandById } from '../../data/vehicleBrands';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function SearchBar({ placeholder = 'Buscar productos, marcas, códigos o modelos...', className = '' }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useClickOutside(containerRef, () => setOpen(false));

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (term.length < 2) return null;
    const productMatches = searchProducts(term).slice(0, 6);
    const utvMatches = getUTVs()
      .filter((utv) => {
        const brandName = getVehicleBrandById(utv.vehicleBrand)?.name ?? '';
        return `${brandName} ${utv.model} ${utv.year}`.toLowerCase().includes(term);
      })
      .slice(0, 3);
    return { products: productMatches, utvs: utvMatches };
  }, [query]);

  const hasResults = results && (results.products.length > 0 || results.utvs.length > 0);

  function goTo(path) {
    setOpen(false);
    setQuery('');
    navigate(path);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!query.trim()) return;
    navigate(`/productos?buscar=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          aria-label="Buscar productos"
          className="w-full rounded-lg border border-border bg-white py-3.5 pl-12 pr-4 text-sm text-text placeholder:text-text-secondary focus:border-navy focus:outline-none"
        />
      </form>

      {open && query.trim().length >= 2 ? (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-lg border border-border bg-white shadow-xl">
          {!hasResults ? (
            <p className="px-4 py-4 text-sm text-text-secondary">No se encontraron resultados para “{query}”.</p>
          ) : (
            <ul className="max-h-80 divide-y divide-border overflow-y-auto">
              {results.utvs.map((utv) => (
                <li key={utv.slug}>
                  <button
                    type="button"
                    onClick={() => goTo(`/utv/${utv.slug}`)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-text hover:bg-bg-light"
                  >
                    <span>
                      {utv.model} <span className="text-text-secondary">· UTV</span>
                    </span>
                    <Icon name="chevronRight" className="h-4 w-4 text-text-secondary" />
                  </button>
                </li>
              ))}
              {results.products.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => goTo(`/producto/${product.slug}`)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-text hover:bg-bg-light"
                  >
                    <span>
                      {product.name}{' '}
                      <span className="text-text-secondary">{product.productBrand ? `· ${product.productBrand}` : ''}</span>
                    </span>
                    <Icon name="chevronRight" className="h-4 w-4 text-text-secondary" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
