import { Router } from 'express';

import BusinessesController from '../controllers/BusinessesController';

const businessesRouter = Router();
const businessesController = new BusinessesController();

businessesRouter.get('/', businessesController.index);

export default businessesRouter;
