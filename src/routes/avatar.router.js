import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import CreateAvatarService from '../services/CreateAvatarService';
import AuthMiddleware from '../middlewares/auth';
const AvatarRouter = Router();


const upload = multer(multerConfig);


AvatarRouter.post('/',AuthMiddleware ,upload.single('file'),async (request, response) => {
    const { filename, path } = request.file;

    try {
        const createAvatarService = new CreateAvatarService();
        const avatar = await createAvatarService.execute({ filename, path });
        return response.json(avatar);

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

})

export default AvatarRouter;