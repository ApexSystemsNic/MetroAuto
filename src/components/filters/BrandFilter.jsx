import FilterSelect from './FilterSelect';

// Marca del VEHÍCULO (Polaris, Can-Am, Honda...). No confundir con la marca
// del producto/fabricante, ver ProductBrandFilter.
export default function BrandFilter({ value, onChange, brands }) {
  return (
    <FilterSelect
      label="Marca del vehículo"
      value={value}
      onChange={onChange}
      placeholder="Todas las marcas"
      options={brands.map((brand) => ({ value: brand.id, label: brand.name }))}
    />
  );
}
