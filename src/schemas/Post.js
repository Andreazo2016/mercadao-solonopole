import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    file: String,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true,
    },
    price: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: {
      virtuals : true,
    }
})

PostSchema.virtual('file_url').get(function() {
  return `http://localhost:3333/files/${this.file}`
})

export default mongoose.model('Post', PostSchema)