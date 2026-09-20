import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import UTVList from './pages/UTV/UTVList';
import UTVDetail from './pages/UTVDetail/UTVDetail';
import RepuestosList from './pages/Repuestos/RepuestosList';
import MantenimientoList from './pages/Mantenimiento/MantenimientoList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="utv" element={<UTVList />} />
        <Route path="utv/:id" element={<UTVDetail />} />
        <Route path="repuestos" element={<RepuestosList />} />
        <Route path="repuestos/:id" element={<ProductDetail basePath="/repuestos" service="parts" />} />
        <Route path="mantenimiento" element={<MantenimientoList />} />
        <Route
          path="mantenimiento/:id"
          element={<ProductDetail basePath="/mantenimiento" service="maintenance" />}
        />
        <Route path="nosotros" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
