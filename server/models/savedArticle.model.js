import mongoose from 'mongoose';

const SavedArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  source: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const SavedArticle = mongoose.model('SavedArticle', SavedArticleSchema);
export default SavedArticle;