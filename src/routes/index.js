import { Router } from 'express';
import SalesmanRouter from './salesmans.router';
import SessionsRouter from './sessions.router';


const routes = Router();

routes.use('/salesmans', SalesmanRouter);
routes.use('/sessions', SessionsRouter);

export default routes;
