import Api from './api';
 
const ArtistsService = {
  index: () => Api.get('/artists')
}
 
export default ArtistsService;