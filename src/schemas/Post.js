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
  highlight: {
    type: Boolean,
    default: false
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
    virtuals: true,
  }
})

export default mongoose.model('Post', PostSchema)