import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-navy text-white hover:bg-navy-dark shadow-sm',
  accent: 'bg-red text-white hover:bg-red-dark shadow-sm',
  whatsapp: 'bg-green-500 text-white hover:bg-green-600 shadow-sm',
  outline: 'border border-border text-navy bg-white hover:border-navy hover:bg-navy/5',
  outlineLight: 'border border-white/40 text-white hover:bg-white/10',
  ghost: 'text-navy hover:bg-navy/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={props.target ?? '_blank'} rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  const Component = as ?? 'button';
  return (
    <Component className={classes} {...props}>
      {content}
    </Component>
  );
}
