import province from '@/assets/js/province.js';

export default function sortProvinces(sortBy = 'id', order = 'asc') {
  return province.sort((a, b) => {
    if (sortBy === 'name') {
      return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else {
      return order === 'asc' ? a.id - b.id : b.id - a.id;
    }
  });
}
