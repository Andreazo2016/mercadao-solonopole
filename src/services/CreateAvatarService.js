import Avatar from '../schemas/Avatar';
class CreateAvatarService {

    async execute({ originalname, path }) {
        const avatar = await Avatar.create({
            name: originalname,
            path: path
        })

        return avatar
    }

}

export default CreateAvatarService