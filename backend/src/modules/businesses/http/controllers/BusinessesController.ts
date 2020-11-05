import { Request, Response } from 'express';
import FetchBusinessesService from '../../services/FetchBusinessesService';

export default class BusinessesController {
  async index(request: Request, response: Response): Promise<Response> {
    const fetchBusinessess = new FetchBusinessesService();

    const businesses = await fetchBusinessess.execute();

    return response.json(businesses);
  }
}
