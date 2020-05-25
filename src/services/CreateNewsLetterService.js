import Newsletter from '../schemas/Newsletter';


class CreateNewsLetterService {
    async execute({email}) {

        const newletters = await Newsletter.create({
            email
        })

        return newletters
    }
}

export default CreateNewsLetterService