import Post from '../schemas/Post';

class ListPostByCategoriesService {
    async execute({ category_id }) {

        const posts = await Post.find({ categorie: category_id }).populate({
            path: 'user',
            populate: {
                path: 'avatar'
            }
        })
        return posts
    }
}

export default ListPostByCategoriesService