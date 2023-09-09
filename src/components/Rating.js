import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      navigate(`/thankyou/${rating}`);
    }
  };

  return (
    <div className="rating-box">
      <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
          fill="#FC7614"
        />
      </svg>
      <div className="rating-header">How did we do?</div>
      <div className="rating-content">
        Please let us know how we did with your support<br /> request. All feedback is appreciated to help us<br /> improve our offering!
      </div>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <div key={value} className={`number-box ${rating === value ? 'selected' : ''}`} onClick={() => handleRatingClick(value)}>
            {value}
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Rating;
