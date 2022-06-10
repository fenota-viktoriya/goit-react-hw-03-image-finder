import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  per_page: 12,
  orientation: 'horizontal',
  image_type: 'photo',
  key: '26796133-e3e02e5bd81bb23cc0de85a5e',
};

export async function ServiceAPI(q, page) {
  const res = await axios.get(`?q=${q}&page=${page}`);

  return res.data.hits;
}
