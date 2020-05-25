import mongoose from 'mongoose';


const { Schema, model } = mongoose


const NewsletterSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
})




export default model('NewsLetter', NewsletterSchema)