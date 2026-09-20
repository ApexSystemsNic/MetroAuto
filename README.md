# MetroParts Nicaragua

Sitio web de MetroParts Nicaragua — repuestos, accesorios, UTV y
mantenimiento para vehículos off-road. «¡Tu auto, nuestro compromiso!»

## Stack

- React 19 + Vite
- React Router (rutas de página completa)
- Tailwind CSS v4 (paleta azul marino / rojo / blanco definida en `src/index.css`)

## Estructura

```
src/
├── assets/         Logo oficial, imágenes (hero real extraído del catálogo)
├── components/
│   ├── layout/     Navbar, Footer, Layout
│   ├── common/     Button, Icon, StockBadge, PriceDisplay, SearchBar, Gallery...
│   ├── products/   ProductCard, ProductGrid, ProductCatalog (sidebar + drawer)
│   ├── utv/        UTVCard, UTVGrid
│   ├── filters/    BrandFilter, VehicleModelFilter, CategoryFilter,
│   │               ProductBrandFilter, PriceFilter, StockFilter...
│   └── maps/       LocationMap
├── pages/          Una carpeta por página (Home, Products, ProductDetail,
│                   Maintenance, UTV, UTVDetail, About, Contact, Location)
├── data/           products.js (catálogo real), vehicleBrands.js, categories.js, utvs.js
├── config/         business.js (datos de contacto/ubicación), currency.js (tasa NIO/USD)
├── services/       productService.js, utvService.js — lógica de filtrado/búsqueda
├── hooks/          useSeo, useClickOutside
└── utils/          currency.js, stock.js, whatsapp.js, categoryIcons.js
```

## Catálogo de datos

`src/data/products.js` contiene los ~124 productos extraídos íntegramente de
`Catalogo2025metroparts.pdf` (nombre, precio en córdobas y compatibilidad tal
como aparecen en el catálogo oficial). Cada producto distingue:

- **Marca del vehículo** (`compatibility[].brand`: Polaris, Can-Am, Honda —
  arquitectura lista para agregar más marcas en `data/vehicleBrands.js`).
- **Marca del producto** (`productBrand`: KEMIMOTO, Rough Country, Rockford
  Fosgate, VEVOR, etc.), derivada dinámicamente de los productos, nunca de
  una lista fija.

`stock` es siempre `null` porque el catálogo no especifica existencias — la
UI muestra "Consultar disponibilidad" en vez de inventar un número.

`src/data/utvs.js` está vacío a propósito: las fuentes oficiales no listan
vehículos UTV en venta, solo repuestos y accesorios. La página `/utv` y sus
servicios ya están listos para cuando se agregue inventario real.

## Moneda

Toda conversión pasa por `src/config/currency.js` (`nioPerUsd: 36.5`) y
`src/utils/currency.js` (`nioToUsd`, `usdToNio`, `formatNio`, `formatUsd`).
Cambiar la tasa de cambio requiere editar una sola línea.

## Pendiente de completar con datos reales

Editar `src/config/business.js`: dirección exacta, latitud/longitud y el
embed de Google Maps. El enlace corto oficial
(`https://maps.app.goo.gl/qZC7yXDd56QdectX6`) no pudo resolverse
automáticamente porque el entorno de desarrollo bloquea el acceso saliente a
Google Maps e Instagram — se usa como botón "Cómo llegar" mientras tanto.

## Catálogo PDF

El PDF oficial vive en `public/catalogo/Catalogo-MetroParts-2025.pdf` y se
enlaza desde la sección "Catálogo MetroParts 2025" en el Inicio.

## Scripts

```bash
npm run dev       # desarrollo
npm run build     # build de producción
npm run lint      # oxlint
npm run preview   # previsualizar el build
```
