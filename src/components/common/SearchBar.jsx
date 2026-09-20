import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { globalSearch } from '../../services/searchService';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function SearchBar({ placeholder = 'Buscar producto, código, marca o modelo...', className = '' }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useClickOutside(containerRef, () => setOpen(false));

  const results = useMemo(() => {
    if (query.trim().length < 2) return null;
    const { parts, maintenance, utvs } = globalSearch(query);
    return { parts: parts.slice(0, 3), maintenance: maintenance.slice(0, 3), utvs: utvs.slice(0, 3) };
  }, [query]);

  const hasResults =
    results && (results.parts.length > 0 || results.maintenance.length > 0 || results.utvs.length > 0);

  function goTo(path) {
    setOpen(false);
    setQuery('');
    navigate(path);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!query.trim()) return;
    navigate(`/repuestos?buscar=${encodeURIComponent(query.trim())}`);
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
          className="w-full rounded-lg border border-border bg-bg-secondary py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-text-secondary focus:border-blue focus:outline-none"
        />
      </form>

      {open && query.trim().length >= 2 ? (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          {!hasResults ? (
            <p className="px-4 py-4 text-sm text-text-secondary">No se encontraron resultados para “{query}”.</p>
          ) : (
            <ul className="max-h-80 divide-y divide-white/5 overflow-y-auto">
              {results.utvs.map((utv) => (
                <li key={utv.id}>
                  <button
                    type="button"
                    onClick={() => goTo(`/utv/${utv.id}`)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white hover:bg-white/5"
                  >
                    <span>
                      {utv.model} <span className="text-text-secondary">· UTV</span>
                    </span>
                    <Icon name="chevronRight" className="h-4 w-4 text-text-secondary" />
                  </button>
                </li>
              ))}
              {results.parts.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => goTo(`/repuestos/${product.id}`)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white hover:bg-white/5"
                  >
                    <span>
                      {product.name} <span className="text-text-secondary">· Repuesto</span>
                    </span>
                    <Icon name="chevronRight" className="h-4 w-4 text-text-secondary" />
                  </button>
                </li>
              ))}
              {results.maintenance.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => goTo(`/mantenimiento/${product.id}`)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white hover:bg-white/5"
                  >
                    <span>
                      {product.name} <span className="text-text-secondary">· Mantenimiento</span>
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
