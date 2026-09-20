import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import FilterSelect from '../../../components/filters/FilterSelect';
import Button from '../../../components/common/Button';
import {
  getAvailableVehicleBrands,
  getAvailableVehicleModels,
  getAvailableCategories,
} from '../../../services/productService';

export default function VehicleFinder() {
  const [vehicleBrand, setVehicleBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  const brands = useMemo(() => getAvailableVehicleBrands(), []);
  const models = useMemo(() => getAvailableVehicleModels(vehicleBrand), [vehicleBrand]);
  const categories = useMemo(
    () => getAvailableCategories({ vehicleBrand, model }),
    [vehicleBrand, model]
  );

  function handleBrandChange(value) {
    setVehicleBrand(value);
    setModel(null);
    setCategory(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (vehicleBrand) params.set('marca', vehicleBrand);
    if (model) params.set('modelo', model);
    if (category) params.set('categoria', category);
    navigate(`/productos?${params.toString()}`);
  }

  return (
    <section className="border-y border-border bg-bg-light py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Buscador"
          title="Encuentra lo que necesitas para tu vehículo"
          description="Selecciona marca, modelo y categoría para ver productos compatibles al instante."
        />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-white p-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <FilterSelect
            label="Marca"
            value={vehicleBrand}
            onChange={handleBrandChange}
            placeholder="Selecciona una marca"
            options={brands.map((item) => ({ value: item.id, label: item.name }))}
          />
          <FilterSelect
            label="Modelo"
            value={model}
            onChange={(value) => {
              setModel(value);
              setCategory(null);
            }}
            placeholder={vehicleBrand ? 'Selecciona un modelo' : 'Elige una marca primero'}
            options={models.map((item) => ({ value: item, label: item }))}
            disabled={!vehicleBrand}
          />
          <FilterSelect
            label="Categoría"
            value={category}
            onChange={setCategory}
            placeholder="Todas las categorías"
            options={categories.map((item) => ({ value: item.id, label: item.name }))}
          />
          <div className="flex items-end">
            <Button as="button" type="submit" variant="accent" className="w-full">
              Buscar productos
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
