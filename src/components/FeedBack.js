import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback:', feedback);
  };

  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Leave your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
