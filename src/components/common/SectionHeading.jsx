export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      {description ? <p className="mt-3 text-text-secondary">{description}</p> : null}
    </div>
  );
}
