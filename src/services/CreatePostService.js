import Post from '../schemas/Post';

class CreatePostService {
  async execute({ user_id ,filename, name, description, categorie_id, price }) {

    const post = await Post.create({
        file: filename,
        name,
        description,
        price,
        categorie: categorie_id,
        user: user_id,
    })

    await post.populate('categorie').populate('user').execPopulate();

    return { post };
  }
}

export default CreatePostService;