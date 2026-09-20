import Container from '../../../components/common/Container';
import Button from '../../../components/common/Button';
import Icon from '../../../components/common/Icon';

const CATALOG_PDF_PATH = '/catalogo/Catalogo-MetroParts-2025.pdf';

export default function CatalogPdfSection() {
  return (
    <section className="border-t border-border bg-bg-light py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-white p-8 text-center sm:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy">
          <Icon name="box" className="h-7 w-7" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Catálogo MetroParts 2025</h2>
          <p className="mx-auto mt-3 max-w-lg text-text-secondary">
            Consulta el catálogo oficial completo en PDF, con todos los productos y precios de referencia.
            El sitio web te ofrece una forma más rápida de encontrar lo que necesitas, filtrando por tu
            vehículo.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href={CATALOG_PDF_PATH} variant="accent">
            Ver catálogo
            <Icon name="externalLink" className="h-4 w-4" />
          </Button>
          <Button href={CATALOG_PDF_PATH} variant="outline" download>
            Descargar catálogo
            <Icon name="download" className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
