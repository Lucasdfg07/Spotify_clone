import Api from './api';

const CategoriesService = {
 index: () => Api.get('/categories'),
 show: (id) => Api.get(`/categories/${id}`)
}

export default CategoriesService;