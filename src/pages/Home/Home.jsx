import { useSeo } from '../../hooks/useSeo';
import Hero from './sections/Hero';
import VehicleFinder from './sections/VehicleFinder';
import CategoriesGrid from './sections/CategoriesGrid';
import FeaturedProducts from './sections/FeaturedProducts';
import FeaturedUTVs from './sections/FeaturedUTVs';
import BrandsShowcase from './sections/BrandsShowcase';
import AboutPreview from './sections/AboutPreview';
import CatalogPdfSection from './sections/CatalogPdfSection';
import WhatsAppCTA from './sections/WhatsAppCTA';
import LocationPreview from './sections/LocationPreview';

export default function Home() {
  useSeo(
    'MetroParts Nicaragua | UTV, Repuestos y Accesorios',
    'MetroParts Nicaragua: repuestos, accesorios y mantenimiento para UTV y vehículos off-road. ¡Tu auto, nuestro compromiso!'
  );

  return (
    <>
      <Hero />
      <VehicleFinder />
      <CategoriesGrid />
      <FeaturedProducts />
      <FeaturedUTVs />
      <BrandsShowcase />
      <AboutPreview />
      <CatalogPdfSection />
      <WhatsAppCTA />
      <LocationPreview />
    </>
  );
}
