import mongoose from 'mongoose';


const { Schema, model } = mongoose



const AvatarSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
})

AvatarSchema.virtual('url').get(function () {
    return `http://localhost:3333/files/${this.name}`
})



export default model('Avatar', AvatarSchema)