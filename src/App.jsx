import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import UTVList from './pages/UTV/UTVList';
import UTVDetail from './pages/UTVDetail/UTVDetail';
import ProductsList from './pages/Products/ProductsList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MaintenanceList from './pages/Maintenance/MaintenanceList';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Location from './pages/Location/Location';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="utv" element={<UTVList />} />
        <Route path="utv/:slug" element={<UTVDetail />} />
        <Route path="productos" element={<ProductsList />} />
        <Route path="producto/:slug" element={<ProductDetail />} />
        <Route path="mantenimiento" element={<MaintenanceList />} />
        <Route path="nosotros" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="ubicacion" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
