import { utvs } from '../data/utvs';
import { vehicleBrands } from '../data/vehicleBrands';

// El catálogo de UTV está vacío hasta que MetroParts confirme unidades
// reales en venta (ver comentario en data/utvs.js). Estas funciones ya
// quedan listas para cuando se agreguen.
export function getUTVs() {
  return utvs;
}

export function getUTVBySlug(slug) {
  return utvs.find((utv) => utv.slug === slug) ?? null;
}

export function filterUTVs({ vehicleBrand, model, year, condition, availability } = {}) {
  return utvs.filter((utv) => {
    if (vehicleBrand && utv.vehicleBrand !== vehicleBrand) return false;
    if (model && utv.model !== model) return false;
    if (year && String(utv.year) !== String(year)) return false;
    if (condition && utv.condition !== condition) return false;
    if (availability && utv.availability !== availability) return false;
    return true;
  });
}

export function getAvailableUTVBrands() {
  const brandIds = new Set(utvs.map((utv) => utv.vehicleBrand));
  return vehicleBrands.filter((brand) => brandIds.has(brand.id));
}

export function getAvailableUTVModels(vehicleBrand) {
  const scoped = vehicleBrand ? utvs.filter((utv) => utv.vehicleBrand === vehicleBrand) : utvs;
  return Array.from(new Set(scoped.map((utv) => utv.model))).sort();
}

export function getAvailableUTVYears(vehicleBrand, model) {
  const scoped = utvs.filter((utv) => {
    if (vehicleBrand && utv.vehicleBrand !== vehicleBrand) return false;
    if (model && utv.model !== model) return false;
    return true;
  });
  return Array.from(new Set(scoped.map((utv) => utv.year))).sort((a, b) => b - a);
}

export function getAvailableUTVConditions(vehicleBrand, model) {
  const scoped = utvs.filter((utv) => {
    if (vehicleBrand && utv.vehicleBrand !== vehicleBrand) return false;
    if (model && utv.model !== model) return false;
    return true;
  });
  return Array.from(new Set(scoped.map((utv) => utv.condition)));
}

export function getRelatedUTVs(utv, limit = 3) {
  return utvs.filter((item) => item.id !== utv.id && item.vehicleBrand === utv.vehicleBrand).slice(0, limit);
}
