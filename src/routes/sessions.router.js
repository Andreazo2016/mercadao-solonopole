import { Router } from 'express';
import AuthenticateService from '../services/AuthenticateService';
const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) => {

    const { email, password } = request.body;

    try {
        const authenticateService = new AuthenticateService();

        const { user, token } = await authenticateService.execute({ email, password });

        return response.json({ user, token })

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

export default sessionsRouter;