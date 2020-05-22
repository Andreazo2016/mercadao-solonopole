import mongoose from 'mongoose';

const CategorieSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('Categorie', CategorieSchema);