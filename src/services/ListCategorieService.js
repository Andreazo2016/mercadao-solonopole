import Categorie from '../schemas/Categorie';

class ListCategorieservice {
  async execute() {

    const categorie = await Categorie.find()

    return { categorie };
  }
}

export default ListCategorieservice;