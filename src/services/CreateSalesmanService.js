import User from '../schemas/User';

class CreateSalesmanService {

    async execute({ name, email, role, contact, password }) {

        const user = await User.findOne({ email });

        if (user) {
            throw new Error('Email already used');
        }

        const salesman = await User.create({
            name,
            email,
            role,
            contact,
            password
        })

        return { salesman };

    }
}

export default CreateSalesmanService;