import { Router } from 'express';
import * as Yup from 'yup';

import SendEmailContactService  from '../services/SendEmailContactService';

const ContactRouter = Router();


ContactRouter.post('/', async (request, response) => {
   

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        content: Yup.string().required(),
    });


    try {

        await schema.validate(request.body);
        const { name, email, content } = request.body;

        const sendEmailService = new SendEmailContactService()

        await sendEmailService.execute({name,email,content})

        return response.send()

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

export default ContactRouter;