import Post from '../schemas/Post';
import Subscription from '../schemas/Subscription';


class CreatePostService {
  async execute({ userId, filename, name, description, categorie_id, price }) {

    const totalPosts = await Post.find({ user: userId })

    const { plan } = await Subscription.findOne({ user: userId }).populate('plan')


    if (totalPosts.length === Number(plan.total_posts)) {
      throw new Error('Total limit post exceeded.');
    }

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