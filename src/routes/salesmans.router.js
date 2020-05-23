import { Router } from 'express';
import User from '../schemas/User';
import CreateSalesmanService from '../services/CreateSalesmanService';
import AuthMiddleware from '../middlewares/auth';
const salesmansRouter = Router();


salesmansRouter.post('/', async (request, response) => {

    const { name, email, role, contact, password } = request.body;

    try {
        const createSalesmanService = new CreateSalesmanService();

        const { salesman } = await createSalesmanService.execute({ name, email, role, contact, password });

        return response.json(salesman)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

salesmansRouter.post('/avatar', AuthMiddleware, async (request, response) => {

    const { avatar } = request.body;
    const user_id = request.userId;

    try {
        const salesmanUpdated = await User.findByIdAndUpdate(user_id, { avatar },{new:true}).populate('avatar')

        return response.json(salesmanUpdated)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

export default salesmansRouter;