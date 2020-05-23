import { Router } from 'express';
import SalesmanRouter from './salesmans.router';
import SessionsRouter from './sessions.router';
import PostRouter from './post.router';
import CategorieRouter from './categorie.router';
import ClientRouter from './clients.router';
import AvatarRouter from './avatar.router';




const routes = Router();

routes.use('/salesmans', SalesmanRouter);
routes.use('/sessions', SessionsRouter);
routes.use('/categories', CategorieRouter);
routes.use('/clients', ClientRouter);


routes.use('/posts' ,PostRouter);
routes.use('/avatar', AvatarRouter);


routes.get('/', (request, response) => {
    return response.json({ ok: true });
})

export default routes;
