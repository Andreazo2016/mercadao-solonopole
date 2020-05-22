import mongoose from 'mongoose';

const CategorieSchema = mongoose.Schema({
    categorie_name: {
      type: String,
      required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('Categorie', CategorieSchema);