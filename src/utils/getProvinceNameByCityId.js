import province from '@/assets/js/province.js';
import city from '@/assets/js/city.js';

export default function getProvinceNameByCityId(cityId) {
  const cityData = city.find((c) => c.id === cityId);
  if (cityData) {
    const provinceData = province.find((p) => p.id === cityData.provinsi_id);
    return provinceData ? provinceData.name : 'Province not found';
  }
  return 'City not found';
}
