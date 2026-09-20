import FilterSelect from './FilterSelect';

export default function CategoryFilter({ value, onChange, categories }) {
  return (
    <FilterSelect
      label="Categoría"
      value={value}
      onChange={onChange}
      placeholder="Todas las categorías"
      options={categories.map((category) => ({ value: category.id, label: category.name }))}
    />
  );
}
