import { Router } from 'express';
import CreateSalesmanService from '../services/CreateSalesmanService';
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

export default salesmansRouter;