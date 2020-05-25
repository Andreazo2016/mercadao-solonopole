import User from '../schemas/User';
import bcrypt from 'bcryptjs';


class UpdateInfoSalesmanService {

    async execute({ userLoggedID, data }) {

        const { email, oldPassword, password } = data

        const user = await User.findById(userLoggedID)

        if (email !== user.email) {
            const ifUserExists = await User.findOne({ email })
            if (ifUserExists) {
                throw new Error("User already exists");
            }
        }

        if (oldPassword && !(await bcrypt.compare(oldPassword, user.password))) {
            throw new Error("Password does not match");
        }

        const hash_password = await bcrypt.hash(password, 8)

        const salesman = await User.findByIdAndUpdate(userLoggedID, { ...data, password: hash_password }, { new: true }).populate('avatar')

        return salesman ;
    }
}

export default UpdateInfoSalesmanService;