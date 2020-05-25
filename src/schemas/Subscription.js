import mongoose from 'mongoose';


const { Schema, model } = mongoose


const SubscriptionSchema = new Schema({
    status: {
        type: String,
        enum: ['open','suspended','canceled'],
        default: 'open'
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
})




export default model('Subscription', SubscriptionSchema)