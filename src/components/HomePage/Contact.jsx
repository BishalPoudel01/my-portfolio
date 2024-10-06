import React, { useState } from "react";
import "../CSS/Contact.css";
import contact from "../../img/contact.png";

const Contact = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., API call or email service)
    alert("Email submitted successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="container">
      <div>
        <h1 className="title">
          Contact Me
        </h1>
      </div>

      {/* Contact Form and Image Layout */}
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="form">
          <p>Please contact me directly at pbishal199@gmail.com or through this form.</p>
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
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Image */}
        <div className="contact-img-wrapper">
          <img src={contact} alt="Contact" className="contact-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
