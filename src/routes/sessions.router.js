import { Router } from 'express';
import AuthenticateService from '../services/AuthenticateService';
import Subscription from '../schemas/Subscription';
const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) => {

    const { email, password } = request.body;

    try {
        const authenticateService = new AuthenticateService();

        const { user, token } = await authenticateService.execute({ email, password });

        const subscription = await Subscription.findOne({ user: user._id }).populate('plan')
        
        return response.json({ user, token, subscription })

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

export default sessionsRouter;