import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import { promisify } from 'util';

export default async (request, response, next) => {
  
  const authHeads = request.headers.authorization;

  if (!authHeads) {
    return res.status(401).json({ error: 'Token not provider' })
  }

  const [, token] = authHeads.split(' ');

  try {

    const decoded = await promisify(jwt.verify)(token, authConfig.jwt.secret);
    console.log(decoded.id)
    
    request.userId = decoded.id;

    return next();

  } catch (err) {
    return response.status(401).json({ error: 'Token invalid' })
  }
}