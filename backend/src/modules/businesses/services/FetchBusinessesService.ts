import api from '../../../config/api';
import {
  findBusinessWithMostLocations,
  findOldestBusiness,
} from '../utils/FindBusinessHelper';

class FetchBusinessesService {
  public async execute(): Promise<any> {
    const { data: businesses } = await api.get('/');

    const businessWithMostLocations = findBusinessWithMostLocations(businesses);
    const oldestBusiness = findOldestBusiness(businesses);

    return {
      businesses: businesses.slice(0, 50),
      businessWithMostLocations,
      oldestBusiness,
    };
  }
}

export default FetchBusinessesService;
