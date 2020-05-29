import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import crypto from 'crypto'
import { extname, resolve } from 'path'

const allowedExtension = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf']

const spacesEndpoint = new aws.Endpoint('ams3.digitaloceanspaces.com')

const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: '5DBS2JI4PEBVJCWFT5TO',
    secretAccessKey: 'XrZClk7kZ7f3xK8ZVYpCzTbiOXMrmZLUDjPUSGOkzi0'
});

export default {
    storage: multerS3({
        s3: s3,
        bucket:'mercadaodigital',
        acl: 'public-read',
        key: function (request, file, cb) {
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
