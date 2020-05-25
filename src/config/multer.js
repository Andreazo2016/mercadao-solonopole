import multer from 'multer';
import crypto from 'crypto';

const allowedExtension = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf']

import { extname, resolve, basename } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: function (request, file, cb) {
      if (!allowedExtension.includes(file.mimetype)) {
        const message = `${file.originalname} is invalid. Only accept png/jpeg/pdf.`;
        return cb(message, null);
      }
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err)
        return cb(null, res.toString('hex') + extname(file.originalname))// ex: djksjdkljfdk.png
      })
    }
  })
}