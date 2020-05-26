import User from '../schemas/User';


class UpdateInfoSalesmanService {

    async execute({ userLoggedID, data }) {

        const salesman = await User.findByIdAndUpdate(userLoggedID, { ...data }, { new: true }).populate('avatar')

        return salesman ;
    }
}

export default UpdateInfoSalesmanService;