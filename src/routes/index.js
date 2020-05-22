import { Router } from 'express';
import SalesmanRouter from './salesmans.router';
import SessionsRouter from './sessions.router';
import PostRouter from './post.router';
import ListPostRouter from './listPost.router';
import CategorieRouter from './categorie.router';
import ListCategorieRouter from './listCategorie.router';
import authMiddleware from '../middlewares/auth';



const routes = Router();

routes.use('/salesmans', SalesmanRouter);
routes.use('/sessions', SessionsRouter);
routes.use('/categories', CategorieRouter);
routes.use('/categories', ListCategorieRouter);

routes.use(authMiddleware);
routes.use('/posts' ,PostRouter);
routes.use('/posts', ListPostRouter);


routes.get('/', (request, response) => {
    return response.json({ ok: true });
})

export default routes;
