import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  savedArticles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SavedArticle'
  }]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;