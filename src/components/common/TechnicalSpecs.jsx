export default function TechnicalSpecs({ specs }) {
  const entries = Object.entries(specs).filter(([, value]) => value !== undefined && value !== null && value !== '');
  if (entries.length === 0) return null;

  return (
    <dl className="grid grid-cols-1 gap-x-6 gap-y-3 rounded-xl border border-border bg-card p-5 sm:grid-cols-2">
      {entries.map(([label, value]) => (
        <div key={label} className="flex items-center justify-between border-b border-white/5 pb-2 sm:border-none sm:pb-0">
          <dt className="text-sm text-text-secondary">{label}</dt>
          <dd className="text-sm font-semibold text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
