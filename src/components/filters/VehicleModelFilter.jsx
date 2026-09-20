import FilterSelect from './FilterSelect';

export default function VehicleModelFilter({ value, onChange, models, disabled = false }) {
  return (
    <FilterSelect
      label="Modelo"
      value={value}
      onChange={onChange}
      placeholder={disabled ? 'Elige una marca primero' : 'Todos los modelos'}
      options={models.map((model) => ({ value: model, label: model }))}
      disabled={disabled}
    />
  );
}
