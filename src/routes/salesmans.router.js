import { Router } from 'express';
import * as Yup from 'yup';
import User from '../schemas/User';
import Post from '../schemas/Post';
import CreateSalesmanService from '../services/CreateSalesmanService';
import UpdateInfoSalesmanService from '../services/UpdateInfoSalesmanService';
import ChangePasswordService from '../services/ChangePasswordService';
import AuthMiddleware from '../middlewares/auth';
const salesmansRouter = Router();


salesmansRouter.post('/', async (request, response) => {


    const schema = Yup.object().shape({
        name: Yup.string().required(),
        username: Yup.string().required(),
        contact: Yup.string().required(),
        email: Yup.string().email().required(),
        role: Yup.string().required(),
        password: Yup.string().required().min(6),

    });

    try {
        await schema.validate(request.body);

        const { name, username, email, role, contact, password } = request.body;

        const createSalesmanService = new CreateSalesmanService();

        const { salesman } = await createSalesmanService.execute({ name, username, email, role, contact, password });

        return response.json(salesman)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

salesmansRouter.get('/', async (request, response) => {



    try {
        const salesmans = await User.find({}).populate('avatar')

        return response.json(salesmans)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

salesmansRouter.get('/:id/posts', async (request, response) => {

    const { id } = request.params


    try {
        const posts = await Post.find({ user: id })
            .populate('categorie')
            .populate({
                path: 'user',
                populate: {
                    path: 'avatar'
                }
            })

        return response.json(posts)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

salesmansRouter.get('/:id/posts/:category/category', async (request, response) => {

    const { id, category } = request.params


    try {
        const posts = await Post.find({ user: id, categorie: category })
            .populate('categorie')
            .populate({
                path: 'user',
                populate: {
                    path: 'avatar'
                }
            })

        return response.json(posts)

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
        const salesmanUpdated = await User.findByIdAndUpdate(user_id, { avatar }, { new: true }).populate('avatar')

        return response.json(salesmanUpdated)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})


salesmansRouter.post('/change-password', AuthMiddleware, async (request, response) => {

    const schema = Yup.object().shape({
        email: Yup.string().email(),
        oldPassword: Yup.string().min(6),
        password: Yup.string()
            .min(8)
            .when('oldPassword', (oldPassword, field) =>
                oldPassword ? field.required() : field
            ),
        confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });
    try {

        const data = request.body;

        await schema.validate(data);

        const { oldPassword, password } = data

        const changePasswordService = new ChangePasswordService()

        const salesmanInfoUpdated = await changePasswordService.execute({ userLoggedID: request.userId, oldPassword, password })

        return response.json(salesmanInfoUpdated)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})


salesmansRouter.put('/', AuthMiddleware, async (request, response) => {

    const schema = Yup.object().shape({
        name: Yup.string(),
        username: Yup.string(),
        contact: Yup.string(),
        email: Yup.string().email()
    });

    try {
        const data = request.body;

        await schema.validate(data);

        const updateInfoSalesmanService = new UpdateInfoSalesmanService()

        const salesman = await updateInfoSalesmanService.execute({ userLoggedID: request.userId, data })

        return response.json(salesman)


    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

export default salesmansRouter;