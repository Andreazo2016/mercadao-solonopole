import { Router } from 'express';
import SalesmanRouter from './salesmans.router';
import SessionsRouter from './sessions.router';
import PostRouter from './post.router';
import ListPostRouter from './listPost.router';


const routes = Router();

routes.use('/salesmans', SalesmanRouter);
routes.use('/sessions', SessionsRouter);
routes.use('/posts', PostRouter);
routes.use('/posts', ListPostRouter);


routes.get('/', (request, response) => {
    return response.json({ ok: true });
})

export default routes;
