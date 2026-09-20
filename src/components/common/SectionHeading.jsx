export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark', className = '' }) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-navy';
  const descColor = tone === 'light' ? 'text-white/70' : 'text-text-secondary';

  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red">{eyebrow}</p>
      ) : null}
      <h2 className={`text-2xl sm:text-3xl font-extrabold ${titleColor}`}>{title}</h2>
      {description ? <p className={`mt-3 ${descColor}`}>{description}</p> : null}
    </div>
  );
}
