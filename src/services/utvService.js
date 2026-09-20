import { utvs } from '../data/utvs';
import { brands } from '../data/brands';

export function getUTVs() {
  return utvs;
}

export function getUTVById(id) {
  return utvs.find((utv) => utv.id === id) ?? null;
}

export function filterUTVs({ brand, model, year, availability } = {}) {
  return utvs.filter((utv) => {
    if (brand && utv.brand !== brand) return false;
    if (model && utv.model !== model) return false;
    if (year && String(utv.year) !== String(year)) return false;
    if (availability && utv.availability !== availability) return false;
    return true;
  });
}

export function getAvailableUTVBrands() {
  const brandIds = new Set(utvs.map((utv) => utv.brand));
  return brands.filter((brand) => brandIds.has(brand.id));
}

export function getAvailableUTVModels(brand) {
  const scoped = brand ? utvs.filter((utv) => utv.brand === brand) : utvs;
  return Array.from(new Set(scoped.map((utv) => utv.model))).sort();
}

export function getAvailableUTVYears(brand, model) {
  const scoped = utvs.filter((utv) => {
    if (brand && utv.brand !== brand) return false;
    if (model && utv.model !== model) return false;
    return true;
  });
  return Array.from(new Set(scoped.map((utv) => utv.year))).sort((a, b) => b - a);
}

export function getAvailableUTVConditions(brand, model) {
  const scoped = utvs.filter((utv) => {
    if (brand && utv.brand !== brand) return false;
    if (model && utv.model !== model) return false;
    return true;
  });
  return Array.from(new Set(scoped.map((utv) => utv.condition)));
}

export function getRelatedUTVs(utv, limit = 3) {
  return utvs
    .filter((item) => item.id !== utv.id && item.brand === utv.brand)
    .slice(0, limit);
}
