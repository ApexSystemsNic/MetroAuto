import FilterSelect from './FilterSelect';
import { STOCK_STATUS } from '../../utils/stock';

const options = [
  { value: STOCK_STATUS.AVAILABLE, label: 'Disponible' },
  { value: STOCK_STATUS.LOW, label: 'Pocas unidades' },
  { value: STOCK_STATUS.OUT, label: 'Agotado' },
];

export default function StockFilter({ value, onChange, label = 'Disponibilidad' }) {
  return <FilterSelect label={label} value={value} onChange={onChange} placeholder="Todas" options={options} />;
}
