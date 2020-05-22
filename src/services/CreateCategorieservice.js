import Categorie from '../schemas/Categorie';

class CreateCategorieService {
  async execute({ categorie_name }) {

    const new_categorie = await Categorie.create({
      categorie_name,
    })

    return { new_categorie };
  }
}

export default CreateCategorieService;