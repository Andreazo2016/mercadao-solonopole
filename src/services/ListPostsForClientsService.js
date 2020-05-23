import Post from '../schemas/Post';

class ListPostsForClientsService {

    async execute() {
        const posts = await Post.find({}).populate({
            path: 'user',
            populate: {
                path: 'avatar'
            }
        })
        return posts
    }
}

export default ListPostsForClientsService