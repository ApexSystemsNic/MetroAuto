# MetroAutos Nicaragua

Sitio web de MetroAutos Nicaragua — UTV, repuestos, accesorios y mantenimiento.

## Stack

- React 19 + Vite
- React Router (rutas de página completa)
- Tailwind CSS v4 (tema oscuro definido en `src/index.css`)

## Estructura

```
src/
├── assets/         Logos, imágenes, íconos
├── components/
│   ├── layout/     Navbar, Footer, Layout
│   ├── common/     Button, Icon, StockBadge, SearchBar, Gallery...
│   ├── products/   ProductCard, ProductGrid, ProductCatalog
│   ├── utv/        UTVCard, UTVGrid
│   └── filters/    BrandFilter, CategoryFilter, ModelFilter, YearFilter, StockFilter...
├── pages/          Una carpeta por página (Home, UTV, Repuestos, Mantenimiento, ...)
├── data/           Datos DEMO (marcas, categorías, productos, UTV) e info del negocio
├── services/       Lógica de filtrado/búsqueda (independiente de la UI)
├── hooks/          useSeo, useClickOutside
└── utils/          Formato de precio, estado de stock, WhatsApp, íconos por categoría
```

## Datos

Todos los productos y UTV en `src/data/` están marcados con `isDemo: true` y
son solo para validar filtros y componentes — **no representan el inventario
real de MetroAutos**. Cuando exista un backend, basta con reemplazar las
funciones de `src/services/` para que consuman una API en lugar de los
archivos locales; los componentes no necesitan cambios.

## Pendiente de completar con datos reales

Editar `src/data/siteInfo.js`: dirección exacta, horarios, correo,
Facebook, Instagram y el embed de Google Maps.

## Scripts

```bash
npm run dev       # desarrollo
npm run build     # build de producción
npm run lint      # oxlint
npm run preview   # previsualizar el build
```
