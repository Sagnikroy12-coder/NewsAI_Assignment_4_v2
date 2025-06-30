require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/news', async (req, res) => {
  const category = req.query.category || 'general';

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        category,
        apiKey: process.env.NEWS_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
