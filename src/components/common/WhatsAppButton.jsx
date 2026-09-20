import Icon from './Icon';
import { siteInfo, buildWhatsAppUrl } from '../../data/siteInfo';

export default function WhatsAppButton({
  message = `Hola, me gustaría más información sobre los productos de ${siteInfo.name}.`,
  floating = false,
  className = '',
  children,
}) {
  const url = buildWhatsAppUrl(message);

  if (floating) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition-colors hover:bg-green-600 ${className}`}
    >
      <Icon name="whatsapp" className="h-5 w-5" />
      {children ?? 'Consultar por WhatsApp'}
    </a>
  );
}
