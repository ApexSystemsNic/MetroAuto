import Icon from './Icon';
import { businessConfig, buildWhatsAppUrl } from '../../config/business';

export default function WhatsAppButton({
  message = `Hola ${businessConfig.shortName}, me gustaría más información sobre sus productos.`,
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
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-900/20 transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
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
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-600 ${className}`}
    >
      <Icon name="whatsapp" className="h-5 w-5" />
      {children ?? 'Consultar por WhatsApp'}
    </a>
  );
}
