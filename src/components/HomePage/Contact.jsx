import React, { useState, useEffect } from "react";
import "../CSS/Contact.css";
import contact from "../../img/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendAgain = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormSubmitted(false);
  };

  return (
    <div id="contact" className="container">
      <div>
        <h1 className="title">Contact Me</h1>
      </div>

      {showAlert && (
        <div className="alert success">
          <p>Your message has been sent successfully!</p>
        </div>
      )}

      <div className="contact-grid">
        {!formSubmitted ? (
          <div className="form">
            <p>
              Please contact me directly at pbishal199@gmail.com or through this form.
            </p>
            <form onSubmit={handleSubmit} className="form-stacked">
              <div className="form-group">
                <div className="form-controls">
                  <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                  />
                  <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                  />
                  <textarea
                    className="textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                    rows="5"
                  />
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn-primary">
                  <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="success-message">
            <p>Your message has been sent successfully!</p>
            <button onClick={handleSendAgain} className="btn-primary center-btn">
              <FontAwesomeIcon icon={faRedoAlt} /> Send Again
            </button>
          </div>
        )}

        <div className="contact-img-wrapper">
          <img src={contact} alt="Contact" className="contact-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
