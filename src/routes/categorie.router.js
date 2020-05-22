import { Router } from 'express';
import CreateCategorieService from '../services/CreateCategorieservice';
const CategorieRouter = Router();


CategorieRouter.post('/',  async (request, response) => {

  const { categorie_name } = request.body;

  try {
    const createCategorieService = new CreateCategorieService();

    const { new_categorie } = await createCategorieService.execute({ categorie_name });

    return response.json(new_categorie);

  } catch (error) {
    return response.status(400).json({
      message: error.message
  })
  }

})

export default CategorieRouter;