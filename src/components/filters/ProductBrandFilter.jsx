import FilterSelect from './FilterSelect';

// Marca del PRODUCTO/fabricante (KEMIMOTO, Rough Country, Rockford
// Fosgate...). Las opciones se derivan de los productos existentes, nunca
// de una lista fija — así nunca se muestra un fabricante sin productos.
export default function ProductBrandFilter({ value, onChange, brands }) {
  return (
    <FilterSelect
      label="Marca del producto"
      value={value}
      onChange={onChange}
      placeholder="Todas las marcas"
      options={brands.map((brand) => ({ value: brand, label: brand }))}
    />
  );
}
