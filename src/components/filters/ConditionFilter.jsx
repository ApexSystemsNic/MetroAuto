import FilterSelect from './FilterSelect';

export default function ConditionFilter({ value, onChange, conditions }) {
  return (
    <FilterSelect
      label="Estado"
      value={value}
      onChange={onChange}
      placeholder="Todos los estados"
      options={conditions.map((condition) => ({ value: condition, label: condition }))}
    />
  );
}
