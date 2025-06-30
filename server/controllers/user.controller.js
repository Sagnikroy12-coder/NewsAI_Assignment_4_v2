import User from '../models/user.model.js';
import SavedArticle from '../models/savedArticle.model.js';

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('savedArticles');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const saveArticle = async (req, res) => {
  try {
    const { title, url, imageUrl, source } = req.body;
    const userId = req.params.userId;

    const newArticle = new SavedArticle({
      title,
      url,
      imageUrl,
      source,
      user: userId
    });

    await newArticle.save();

    await User.findByIdAndUpdate(userId, { $push: { savedArticles: newArticle._id } });

    res.status(201).json({ message: 'Article saved successfully.', article: newArticle });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getSavedArticles = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('savedArticles');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user.savedArticles);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};