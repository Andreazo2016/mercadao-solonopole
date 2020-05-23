import { Router } from 'express';
import CreateCategorieService from '../services/CreateCategorieservice';
import ListCategorieService from '../services/ListCategorieService';
const CategorieRouter = Router();


CategorieRouter.post('/', async (request, response) => {

  const { name } = request.body;

  try {
    const createCategorieService = new CreateCategorieService();

    const { new_categorie } = await createCategorieService.execute({ name });

    return response.json(new_categorie);

  } catch (error) {
    return response.status(400).json({
      message: error.message
    })
  }

})

CategorieRouter.get('/', async (request, response) => {


  try {
    const listCategorieService = new ListCategorieService();

    const { categorie } = await listCategorieService.execute();

    return response.json(categorie);

  } catch (error) {
    return response.status(400).json({
      message: error.message
    })
  }

})

export default CategorieRouter;