import Categorie from '../schemas/Categorie';

class CreateCategorieService {
  async execute({ name }) {

    const new_categorie = await Categorie.create({
      name,
    })

    return { new_categorie };
  }
}

export default CreateCategorieService;