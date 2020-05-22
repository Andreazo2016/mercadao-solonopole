import { Router } from 'express';
import ListPostService from '../services/ListPostService';
const ListPostRouter = Router();


ListPostRouter.get('/', async (request, response) => {

  const { user_id } = request.headers;

  try {
    const listPostService = new ListPostService();

    const { post } = await listPostService.execute({ user_id });

    return response.json(post);

  } catch (error) {
    return response.status(400).json({
      message: error.message
  })
  }

})

export default ListPostRouter;