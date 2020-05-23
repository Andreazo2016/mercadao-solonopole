import Post from '../schemas/Post';

class CreatePostService {
  async execute({ userId ,filename, name, description, categorie_id, price }) {

    const post = await Post.create({
        file: filename,
        name,
        description,
        price,
        categorie: categorie_id,
        user: userId,
    })

    await post.populate('categorie').populate('user').execPopulate();

    return { post };
  }
}

export default CreatePostService;