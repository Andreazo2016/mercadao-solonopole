import User from '../schemas/User';
import Post from '../schemas/Post';

class CriatePostService {
  async execute({ user_id ,filename, product, description, categorie, price }) {

    /* const user = await User.findById({ userId });

    if (!user) {
        throw new Error('User does not exist');
    } */

    const post = await Post.create({
        file: filename,
        product,
        description,
        categorie,
        price,
        user: user_id,
    })

    await post.populate('user').execPopulate();

    return { post };
  }
}

export default CriatePostService;