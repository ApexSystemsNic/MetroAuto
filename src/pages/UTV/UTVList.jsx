import { useMemo, useState } from 'react';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import UTVGrid from '../../components/utv/UTVGrid';
import BrandFilter from '../../components/filters/BrandFilter';
import VehicleModelFilter from '../../components/filters/VehicleModelFilter';
import YearFilter from '../../components/filters/YearFilter';
import ConditionFilter from '../../components/filters/ConditionFilter';
import StockFilter from '../../components/filters/StockFilter';
import WhatsAppButton from '../../components/common/WhatsAppButton';
import { useSeo } from '../../hooks/useSeo';
import {
  filterUTVs,
  getAvailableUTVBrands,
  getAvailableUTVModels,
  getAvailableUTVYears,
  getAvailableUTVConditions,
  getUTVs,
} from '../../services/utvService';

export default function UTVList() {
  useSeo(
    'UTV en Nicaragua | MetroParts',
    'Catálogo de UTV en Nicaragua: Polaris, Can-Am, Honda y más en MetroParts Nicaragua.'
  );

  const [vehicleBrand, setVehicleBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [condition, setCondition] = useState(null);
  const [availability, setAvailability] = useState(null);

  const brands = useMemo(() => getAvailableUTVBrands(), []);
  const models = useMemo(() => getAvailableUTVModels(vehicleBrand), [vehicleBrand]);
  const years = useMemo(() => getAvailableUTVYears(vehicleBrand, model), [vehicleBrand, model]);
  const conditions = useMemo(() => getAvailableUTVConditions(vehicleBrand, model), [vehicleBrand, model]);

  const results = useMemo(
    () =>
      filterUTVs({ vehicleBrand, model, year, availability }).filter(
        (utv) => !condition || utv.condition === condition
      ),
    [vehicleBrand, model, year, availability, condition]
  );

  const hasAnyUTV = getUTVs().length > 0;

  function handleBrandChange(value) {
    setVehicleBrand(value);
    setModel(null);
    setYear(null);
  }

  function handleModelChange(value) {
    setModel(value);
    setYear(null);
  }

  function clearFilters() {
    setVehicleBrand(null);
    setModel(null);
    setYear(null);
    setCondition(null);
    setAvailability(null);
  }

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'UTV' }]} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">Catálogo de UTV</h1>
        <p className="mt-2 max-w-2xl text-text-secondary">
          Unidades off-road disponibles. Filtra por marca, modelo, año, condición y disponibilidad.
        </p>
      </div>

      {hasAnyUTV ? (
        <>
          <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-bg-light p-5 sm:grid-cols-3 lg:grid-cols-5">
            <BrandFilter value={vehicleBrand} onChange={handleBrandChange} brands={brands} />
            <VehicleModelFilter value={model} onChange={handleModelChange} models={models} disabled={!vehicleBrand} />
            <YearFilter value={year} onChange={setYear} years={years} />
            <ConditionFilter value={condition} onChange={setCondition} conditions={conditions} />
            <StockFilter value={availability} onChange={setAvailability} label="Disponibilidad" />
          </div>
          <p className="mb-5 text-sm text-text-secondary">{results.length} resultado(s)</p>
          <UTVGrid utvs={results} onClearFilters={clearFilters} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-bg-light px-6 py-16 text-center">
          <h3 className="text-lg font-semibold text-text">Por el momento no tenemos UTV en venta.</h3>
          <p className="mt-2 max-w-md text-sm text-text-secondary">
            Estamos enfocados en repuestos, accesorios y mantenimiento. Escríbenos por WhatsApp y te avisamos
            en cuanto tengamos unidades disponibles.
          </p>
          <div className="mt-6">
            <WhatsAppButton message="Hola MetroParts, ¿tienen UTV disponibles para la venta actualmente?" />
          </div>
        </div>
      )}
    </Container>
  );
}
