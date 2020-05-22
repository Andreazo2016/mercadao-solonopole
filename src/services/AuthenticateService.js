import User from '../schemas/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

class AuthenticateService {

    async execute({ email, password }) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User not exists');
        }

        const passwordMatched = await bcrypt.compare(password, user.password);

        if (!passwordMatched) {
            throw new Error('Password does not match.')
        }

        const { secret, expiresIn } = authConfig.jwt;

        
        const token = jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn });

        return {
            user,
            token
        }
    }
}

export default AuthenticateService;