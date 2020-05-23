import { Router } from 'express';
import ListPostsForClientsService from '../services/ListPostsForClientsService';
import ListPostByCategoriesService from '../services/ListPostByCategoriesService';
const ClientRouter = Router();


ClientRouter.get('/posts', async (request, response) => {

    try {
        const listPostsForClientsService = new ListPostsForClientsService();
        const posts = await listPostsForClientsService.execute();
        return response.json(posts);

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

ClientRouter.get('/posts-by-category', async (request, response) => {

    const { category } = request.query
  
    try {
      console.log(category)
      const listPostByCategoriesService = new ListPostByCategoriesService();
  
      const posts = await listPostByCategoriesService.execute({ category_id: category });
  
      return response.json(posts);
  
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  
  
  })

export default ClientRouter;