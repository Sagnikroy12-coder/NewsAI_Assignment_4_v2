import React, { useState } from 'react';
import axios from 'axios';
import './SummarizeButton.css';

function SummarizeButton({ content }) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    setLoading(true);
    setError('');
    setSummary('');

    try {
      const res = await axios.post('http://localhost:5000/api/summarize', { content });
      setSummary(res.data.summary);
    } catch (err) {
      setError('Failed to get summary. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="summarize-section">
      <button onClick={handleSummarize} className="summarize-button">
        Summarize
      </button>
      {loading && <p className="loading">Loading summary...</p>}
      {error && <p className="error">{error}</p>}
      {summary && (
        <div className="summary-box">
          <h4>Summary:</h4>
          <ul>
            {summary.split('\n').map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SummarizeButton;