import { AxiosResponse } from 'axios';
import api from '../../../config/api';

class FetchBusinessesService {
  public async execute(): Promise<AxiosResponse> {
    const { data } = await api.get('/');

    return data;
  }
}

export default FetchBusinessesService;
