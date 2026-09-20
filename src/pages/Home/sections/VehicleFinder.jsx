import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import FilterSelect from '../../../components/filters/FilterSelect';
import Button from '../../../components/common/Button';
import { getAvailableUTVBrands } from '../../../services/utvService';
import { partsService, maintenanceService, getCombinedAvailableCategories, getCombinedAvailableModels } from '../../../services/productService';

const brandOptions = Array.from(
  new Map(
    [...partsService.getAvailableBrands(), ...maintenanceService.getAvailableBrands(), ...getAvailableUTVBrands()].map(
      (brand) => [brand.id, brand]
    )
  ).values()
);

export default function VehicleFinder() {
  const [brand, setBrand] = useState(null);
  const [category, setCategory] = useState(null);
  const [model, setModel] = useState(null);
  const navigate = useNavigate();

  const categoryOptions = useMemo(() => getCombinedAvailableCategories(brand), [brand]);
  const selectedCategory = categoryOptions.find((item) => item.id === category);
  const modelOptions = useMemo(
    () => getCombinedAvailableModels(brand, category, selectedCategory?.source),
    [brand, category, selectedCategory]
  );

  function handleBrandChange(value) {
    setBrand(value);
    setCategory(null);
    setModel(null);
  }

  function handleCategoryChange(value) {
    setCategory(value);
    setModel(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const destination = selectedCategory?.source === 'mantenimiento' ? '/mantenimiento' : '/repuestos';
    const params = new URLSearchParams();
    if (brand) params.set('marca', brand);
    if (category) params.set('categoria', category);
    if (model) params.set('modelo', model);
    navigate(`${destination}?${params.toString()}`);
  }

  return (
    <section className="border-y border-border bg-bg-secondary py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Buscador"
          title="Encuentra lo que necesitas para tu vehículo"
          description="Selecciona marca, categoría y modelo para ver productos compatibles al instante."
        />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <FilterSelect
            label="Marca"
            value={brand}
            onChange={handleBrandChange}
            placeholder="Selecciona una marca"
            options={brandOptions.map((item) => ({ value: item.id, label: item.name }))}
          />
          <FilterSelect
            label="Categoría"
            value={category}
            onChange={handleCategoryChange}
            placeholder={brand ? 'Selecciona una categoría' : 'Elige una marca primero'}
            options={categoryOptions.map((item) => ({ value: item.id, label: item.name }))}
          />
          <FilterSelect
            label="Modelo"
            value={model}
            onChange={setModel}
            placeholder={category ? 'Selecciona un modelo' : 'Opcional'}
            options={modelOptions.map((item) => ({ value: item, label: item }))}
          />
          <div className="flex items-end">
            <Button as="button" type="submit" variant="primary" className="w-full" disabled={!brand}>
              Buscar productos
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
