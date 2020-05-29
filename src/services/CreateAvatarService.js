import Avatar from '../schemas/Avatar';
class CreateAvatarService {

    async execute({ originalname,location, path }) {
        const avatar = await Avatar.create({
            name: originalname,
            path: path,
            url:location
        })

        return avatar
    }

}

export default CreateAvatarService