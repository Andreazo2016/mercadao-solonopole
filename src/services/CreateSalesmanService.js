import User from '../schemas/User';
import Plan from '../schemas/Plan';
import Subscription from '../schemas/Subscription';

class CreateSalesmanService {

    async execute({ name,username, email, role, contact, password }) {

        const user = await User.findOne({ email });

        if (user) {
            throw new Error('Email already used');
        }

        const salesman = await User.create({
            name,
            username,
            email,
            role,
            contact,
            password
        })

        const startedPlan = await Plan.findOne({ type: 'started' })

        await Subscription.create({
            user: salesman._id,
            plan: startedPlan._id
        })

        return { salesman };

    }
}

export default CreateSalesmanService;