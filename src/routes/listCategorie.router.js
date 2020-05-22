import { Router } from 'express';
import ListCategorieService from '../services/ListCategorieService';
const ListCategorieRouter = Router();


ListCategorieRouter.get('/', async (request, response) => {


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

export default ListCategorieRouter;