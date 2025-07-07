import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-box">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <button className="notfound-button" onClick={() => navigate('/')}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}
