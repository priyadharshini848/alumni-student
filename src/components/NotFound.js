// src/components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Optional CSS for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
