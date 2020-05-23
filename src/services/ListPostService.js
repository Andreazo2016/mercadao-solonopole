import Post from '../schemas/Post';

class ListPostService {
  async execute({ user_id }) {

    const post = await Post.find({ user: user_id}).populate("categorie")

    return { post };
  }
}

export default ListPostService;