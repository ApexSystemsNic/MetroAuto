import Icon from '../common/Icon';

// Select base reutilizado por todos los filtros dependientes del catálogo.
export default function FilterSelect({ label, value, onChange, options, placeholder = 'Todas', disabled = false }) {
  return (
    <label className="flex w-full flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">{label}</span>
      <div className="relative">
        <select
          value={value ?? ''}
          onChange={(event) => onChange(event.target.value || null)}
          disabled={disabled || options.length === 0}
          className="w-full appearance-none rounded-lg border border-border bg-white py-3 pl-3.5 pr-9 text-sm text-text disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-light focus:border-navy focus:outline-none"
        >
          <option value="">{options.length === 0 ? 'Sin opciones' : placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          name="chevronDown"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
        />
      </div>
    </label>
  );
}
