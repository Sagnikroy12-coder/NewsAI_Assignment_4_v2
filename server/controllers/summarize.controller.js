import axios from 'axios';

export const summarizeText = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: 'Content is required for summarization.' });
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      return res.status(500).json({ message: 'Gemini API key not configured.' });
    }

    // Call Gemini API (example using POST with prompt)
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        contents: [
          {
            parts: [
              {
                text: Summarize the following content into 3 bullet points:\n\n${content}
              }
            ]
          }
        ]
      },
      {
        params: { key: geminiApiKey },
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const modelResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!modelResponse) {
      return res.status(500).json({ message: 'Failed to get summary from Gemini API.' });
    }

    res.json({ summary: modelResponse });
  } catch (error) {
    console.error('Summarization error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};