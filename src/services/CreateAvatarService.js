import Avatar from '../schemas/Avatar';
class CreateAvatarService {

    async execute({ filename, path }) {
        const avatar = await Avatar.create({
            name: filename,
            path: path
        })

        return avatar
    }

}

export default CreateAvatarService