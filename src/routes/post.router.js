import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import CreatePostService from '../services/CreatePostService';
const PostRouter = Router();

const upload = multer(multerConfig);

PostRouter.post('/', upload.single('file'), async (request, response) => {

  const { filename } = request.file;
  const { product, description, categorie, price } = request.body;
  const { user_id } = request.headers;

  try {
    const createPostService = new CreatePostService();

    const { post } = await createPostService.execute({ user_id, filename, product, description, categorie, price })

    return response.json(post)

  } catch (error) {
    return response.status(400).json({
      message: error.message
  })
  }

})

export default PostRouter;