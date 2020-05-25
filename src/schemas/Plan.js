import mongoose from 'mongoose';


const { Schema, model } = mongoose


const PlanSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    total_posts:Number,
    price: {
        type: String,
        required: true,
        default: 0
    },
    duration_month:Number
}, {
    timestamps: true,
    toJSON: { virtuals: true },
})




export default model('Plan', PlanSchema)