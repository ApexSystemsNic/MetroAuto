import FilterSelect from './FilterSelect';

export default function ModelFilter({ value, onChange, models }) {
  return (
    <FilterSelect
      label="Modelo"
      value={value}
      onChange={onChange}
      placeholder="Todos los modelos"
      options={models.map((model) => ({ value: model, label: model }))}
    />
  );
}
