import FilterSelect from './FilterSelect';

export default function YearFilter({ value, onChange, years }) {
  return (
    <FilterSelect
      label="Año"
      value={value}
      onChange={onChange}
      placeholder="Todos los años"
      options={years.map((year) => ({ value: String(year), label: String(year) }))}
    />
  );
}
