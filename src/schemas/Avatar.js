import mongoose from 'mongoose';


const { Schema, model } = mongoose



const AvatarSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
})



export default model('Avatar', AvatarSchema)