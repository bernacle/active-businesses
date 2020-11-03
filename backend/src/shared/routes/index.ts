import { Router } from 'express';
import businessesRouter from '../../modules/businesses/http/routes/businesses.routes';

const routes = Router();

routes.use('/businesses', businessesRouter);

export default routes;
