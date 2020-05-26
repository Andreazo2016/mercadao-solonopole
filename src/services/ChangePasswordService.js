import User from '../schemas/User';
import bcrypt from 'bcryptjs';

class ChangePasswordService {

    async execute({userLoggedID, oldPassword, password }) {

        const user = await User.findById(userLoggedID);

        if (!(await bcrypt.compare(oldPassword, user.password))) {
            throw new Error("Password does not match")
        }

        const hash_password = await bcrypt.hash(password, 8)

        const salesman = await User.findByIdAndUpdate(userLoggedID, { password: hash_password }, { new: true }).populate('avatar')

        return salesman

    }
}

export default ChangePasswordService