import { useState } from 'react';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Icon from '../../components/common/Icon';
import LocationMap from '../../components/maps/LocationMap';
import WhatsAppButton from '../../components/common/WhatsAppButton';
import { useSeo } from '../../hooks/useSeo';
import { businessConfig, buildWhatsAppUrl } from '../../config/business';

const emptyForm = { name: '', phone: '', email: '', subject: '', message: '' };

export default function Contact() {
  useSeo(
    'Contacto | MetroParts Nicaragua',
    'Contacta a MetroParts Nicaragua por WhatsApp, teléfono, Instagram o formulario.'
  );

  const [form, setForm] = useState(emptyForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const lines = [
      `Hola, mi nombre es ${form.name || '(sin nombre)'}.`,
      form.subject ? `Asunto: ${form.subject}` : null,
      form.message ? `Mensaje: ${form.message}` : null,
      form.phone ? `Mi teléfono: ${form.phone}` : null,
      form.email ? `Mi correo: ${form.email}` : null,
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  }

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]} />

      <div className="mt-4 mb-10">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">Contacto</h1>
        <p className="mt-2 max-w-2xl text-text-secondary">
          Escríbenos por WhatsApp o completa el formulario y te responderemos lo antes posible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold text-navy">{businessConfig.name}</h2>

          <ul className="mt-5 space-y-4">
            <li className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Icon name="phone" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Teléfono</p>
                <a href={`tel:${businessConfig.contact.whatsapp}`} className="font-semibold text-text hover:text-navy">
                  {businessConfig.contact.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Icon name="whatsapp" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">WhatsApp</p>
                <p className="font-semibold text-text">{businessConfig.contact.phoneDisplay}</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red/10 text-red">
                <Icon name="instagram" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Instagram</p>
                <a
                  href={businessConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-text hover:text-navy"
                >
                  {businessConfig.instagram.username}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Icon name="mapPin" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Ubicación</p>
                <p className="font-semibold text-text">
                  {businessConfig.googleMaps.address ?? businessConfig.city}
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton />
            <a
              href={businessConfig.googleMaps.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-navy hover:border-navy"
            >
              Cómo llegar
              <Icon name="externalLink" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8">
            <LocationMap />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-white p-6">
          <Field label="Nombre" name="name" value={form.name} onChange={handleChange} required />
          <Field label="Teléfono" name="phone" value={form.phone} onChange={handleChange} type="tel" />
          <Field label="Correo" name="email" value={form.email} onChange={handleChange} type="email" />
          <Field label="Asunto" name="subject" value={form.subject} onChange={handleChange} />
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">Mensaje</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full rounded-lg border border-border bg-white px-3.5 py-3 text-sm text-text placeholder:text-text-secondary focus:border-navy focus:outline-none"
              placeholder="Cuéntanos qué necesitas..."
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-dark"
          >
            Enviar mensaje
          </button>
          <p className="text-center text-xs text-text-secondary">
            Al enviar, se abrirá WhatsApp con tu mensaje listo para enviarnos.
          </p>
        </form>
      </div>
    </Container>
  );
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-border bg-white px-3.5 py-3 text-sm text-text placeholder:text-text-secondary focus:border-navy focus:outline-none"
      />
    </label>
  );
}
