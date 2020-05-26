import { Router } from 'express';
import multer from 'multer';
import AuthMiddleware from '../middlewares/auth';
import multerConfig from '../config/multer';
import Post from '../schemas/Post';
import CreatePostService from '../services/CreatePostService';
import ListPostService from '../services/ListPostService';


const PostRouter = Router();

const upload = multer(multerConfig);


PostRouter.get('/', AuthMiddleware, async (request, response) => {

  const user_id = request.userId;

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



PostRouter.post('/', AuthMiddleware, upload.single('file'), async (request, response) => {

    const { filename } = request.file;
    const { name, description, categorie_id, price } = request.body;
    const userId = request.userId;

    try {
        const createPostService = new CreatePostService();

        const { post } = await createPostService.execute({ userId, filename, name, description, categorie_id, price })

        return response.json(post);

    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }

})





PostRouter.delete('/:id', AuthMiddleware, async (request, response) => {

  const { id } = request.params

  try {

    await Post.findByIdAndDelete(id);

    return response.send();

  } catch (error) {
    return response.status(400).json({
      message: error.message
    })
  }


})

export default PostRouter;