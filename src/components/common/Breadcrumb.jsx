import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-text-secondary">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.to && !isLast ? (
              <Link to={item.to} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-white' : ''}>{item.label}</span>
            )}
            {!isLast ? <Icon name="chevronRight" className="h-3.5 w-3.5" /> : null}
          </span>
        );
      })}
    </nav>
  );
}
