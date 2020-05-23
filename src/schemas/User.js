import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avatar'
    },
    role: {
        type: String,
        enum: ['administrator', 'client', 'salesman']
    }
}, {
    timestamps: true,
})


UserSchema.pre('save', async function () {
    const hash_password = await bcrypt.hash(this.password, 8)
    this.password = hash_password
})

UserSchema.set('toJSON', {
    transform: function (doc, ret, opt) {
        delete ret['password']
        return ret
    }
})



export default mongoose.model('User', UserSchema)