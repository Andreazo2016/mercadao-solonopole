import Post from '../schemas/Post';

class ListPostsForClientsService {

    async execute() {
        const posts = await Post.find({})
        .populate('categorie')
        .populate({
            path: 'user',
            populate: {
                path: 'avatar'
            }
        }).sort({ createdAt: 'desc'})
        return posts
    }
}

export default ListPostsForClientsService