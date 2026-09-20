import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import UTVGrid from '../../components/utv/UTVGrid';
import BrandFilter from '../../components/filters/BrandFilter';
import ModelFilter from '../../components/filters/ModelFilter';
import YearFilter from '../../components/filters/YearFilter';
import ConditionFilter from '../../components/filters/ConditionFilter';
import StockFilter from '../../components/filters/StockFilter';
import { useSeo } from '../../hooks/useSeo';
import {
  filterUTVs,
  getAvailableUTVBrands,
  getAvailableUTVModels,
  getAvailableUTVYears,
  getAvailableUTVConditions,
} from '../../services/utvService';

export default function UTVList() {
  useSeo(
    'UTV en Nicaragua | MetroAutos',
    'Catálogo de UTV en Nicaragua: Polaris, Can-Am, Honda, Yamaha y Kawasaki en MetroAutos Nicaragua.'
  );

  const [searchParams] = useSearchParams();
  const [brand, setBrand] = useState(searchParams.get('marca'));
  const [model, setModel] = useState(searchParams.get('modelo'));
  const [year, setYear] = useState(null);
  const [condition, setCondition] = useState(null);
  const [availability, setAvailability] = useState(null);

  const brands = useMemo(() => getAvailableUTVBrands(), []);
  const models = useMemo(() => getAvailableUTVModels(brand), [brand]);
  const years = useMemo(() => getAvailableUTVYears(brand, model), [brand, model]);
  const conditions = useMemo(() => getAvailableUTVConditions(brand, model), [brand, model]);

  const results = useMemo(
    () => filterUTVs({ brand, model, year, availability }).filter((utv) => !condition || utv.condition === condition),
    [brand, model, year, availability, condition]
  );

  function handleBrandChange(value) {
    setBrand(value);
    setModel(null);
    setYear(null);
  }

  function handleModelChange(value) {
    setModel(value);
    setYear(null);
  }

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'UTV' }]} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Catálogo de UTV</h1>
        <p className="mt-2 max-w-2xl text-text-secondary">
          Unidades off-road de las principales marcas. Filtra por marca, modelo, año, estado y disponibilidad.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-3 lg:grid-cols-5">
        <BrandFilter value={brand} onChange={handleBrandChange} brands={brands} />
        <ModelFilter value={model} onChange={handleModelChange} models={models} />
        <YearFilter value={year} onChange={setYear} years={years} />
        <ConditionFilter value={condition} onChange={setCondition} conditions={conditions} />
        <StockFilter value={availability} onChange={setAvailability} label="Disponibilidad" />
      </div>

      <p className="mb-5 text-sm text-text-secondary">{results.length} resultado(s)</p>

      <UTVGrid utvs={results} />
    </Container>
  );
}
