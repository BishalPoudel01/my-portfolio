import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/CSS/errorpage.css"; 

const ErrorPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <hr />
      <h2 className="error-title">Oops, Page Not Found</h2>
      <p className="error-message">Sorry, the page you are looking for is not found or has been removed.</p>
      
      {/* Buttons */}
      <div className="button-group">
        <button className="uk-button hover-btn" onClick={handleGoBack}>
          Go Back
        </button>
        <Link to="/" className="uk-button hover-btn">
          Redirect to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
