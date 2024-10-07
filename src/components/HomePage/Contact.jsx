import React, { useState, useRef, useEffect } from "react";
import "../CSS/Contact.css";
import contact from "../../img/contact.png";

const Contact = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to track form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to control the custom alert visibility
  const [showAlert, setShowAlert] = useState(false);

  // Ref for the message textarea
  const textareaRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Adjust the height of the textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on content
    }
  }, [formData.message]);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Set form submission state to true
    setShowAlert(true); // Show custom alert message

    // Hide the alert after 2 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  // Reset form when "Send Again" is clicked
  const handleSendAgain = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormSubmitted(false); // Reset form submission state
  };

  return (
    <div id="contact" className="container">
      <div>
        <h1 className="title">Contact Me</h1>
      </div>

      {/* Custom Alert Message */}
      {showAlert && (
        <div className="alert success">
          <p>Your message has been sent successfully!</p>
        </div>
      )}

      {/* Contact Form and Image Layout */}
      <div className="contact-grid">
        {/* Show form only if not submitted */}
        {!formSubmitted ? (
          <div className="form">
            <p>
              Please contact me directly at pbishal199@gmail.com or through this
              form.
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
                    ref={textareaRef}
                    className="textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                    rows={1} // Start with 1 row
                  />
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Show success message and Send Again button after submission
          <div className="success-message">
            <p>Your message has been sent successfully!</p>
            <button onClick={handleSendAgain} className="btn-primary center-btn">
              Send Again
            </button>
          </div>
        )}

        {/* Contact Image */}
        <div className="contact-img-wrapper">
          <img src={contact} alt="Contact" className="contact-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
