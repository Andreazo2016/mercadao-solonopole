import { Router } from 'express';
import * as Yup from 'yup';
import CreateNewsLetterService from '../services/CreateNewsLetterService';

const NewsletterRouter = Router();


NewsletterRouter.post('/', async (request, response) => {

    try {
        const schema = Yup.object().shape({
            email: Yup.string().email('Invalid email format').required('Email is required')
        })

        await schema.validate(data)

        const createNewsLetterService = new CreateNewsLetterService()

        const newsletters = await createNewsLetterService.execute(request.body)

        return newsletters

    } catch (error) {

        return response.status(400)
            .json({
                message: 'Erro ao criar newsletter'
            })
    }


})

export default NewsletterRouter;