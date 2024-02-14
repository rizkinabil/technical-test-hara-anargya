import city from '@/assets/js/city.js';

export default function getCitiesByProvinceId(provinceId) {
  return city.filter((c) => c.provinsi_id === provinceId);
}
