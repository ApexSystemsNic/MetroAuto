import FilterSelect from './FilterSelect';

export default function BrandFilter({ value, onChange, brands }) {
  return (
    <FilterSelect
      label="Marca"
      value={value}
      onChange={onChange}
      placeholder="Todas las marcas"
      options={brands.map((brand) => ({ value: brand.id, label: brand.name }))}
    />
  );
}
