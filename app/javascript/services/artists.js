import Api from './api';
 
const ArtistsService = {
  index: () => Api.get('/artists'),
  show: (id) => Api.get(`/artists/${id}`)
}
 
export default ArtistsService;