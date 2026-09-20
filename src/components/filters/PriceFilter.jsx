// Filtro de precio por rango, en córdobas (C$). Los productos no tienen
// rangos predefinidos en el catálogo, así que se usan dos campos numéricos
// en vez de inventar categorías de precio.
export default function PriceFilter({ min, max, onChangeMin, onChangeMax }) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">Precio (C$)</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          inputMode="numeric"
          min="0"
          placeholder="Mín"
          value={min ?? ''}
          onChange={(event) => onChangeMin(event.target.value ? Number(event.target.value) : null)}
          className="w-full rounded-lg border border-border bg-white py-2.5 px-3 text-sm text-text focus:border-navy focus:outline-none"
        />
        <span className="text-text-secondary">–</span>
        <input
          type="number"
          inputMode="numeric"
          min="0"
          placeholder="Máx"
          value={max ?? ''}
          onChange={(event) => onChangeMax(event.target.value ? Number(event.target.value) : null)}
          className="w-full rounded-lg border border-border bg-white py-2.5 px-3 text-sm text-text focus:border-navy focus:outline-none"
        />
      </div>
    </div>
  );
}
