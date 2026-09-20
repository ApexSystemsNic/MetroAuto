import { useSeo } from '../../hooks/useSeo';
import Hero from './sections/Hero';
import VehicleFinder from './sections/VehicleFinder';
import QuickAccess from './sections/QuickAccess';
import FeaturedUTVs from './sections/FeaturedUTVs';
import FeaturedProducts from './sections/FeaturedProducts';
import BrandsShowcase from './sections/BrandsShowcase';
import AboutPreview from './sections/AboutPreview';
import WhatsAppCTA from './sections/WhatsAppCTA';
import LocationPreview from './sections/LocationPreview';

export default function Home() {
  useSeo(
    'MetroAutos Nicaragua | UTV, Repuestos y Accesorios',
    'MetroAutos Nicaragua: partes, repuestos, accesorios y mantenimiento para UTV y vehículos off-road en Managua.'
  );

  return (
    <>
      <Hero />
      <VehicleFinder />
      <QuickAccess />
      <FeaturedUTVs />
      <FeaturedProducts />
      <BrandsShowcase />
      <AboutPreview />
      <WhatsAppCTA />
      <LocationPreview />
    </>
  );
}
