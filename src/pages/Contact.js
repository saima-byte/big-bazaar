import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  return (
    <main className="container">
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 2rem;
            padding: 2rem;
          }

          /* Left section (contact info) */
          .contact-info {
            background: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 0.5rem;
            padding: 2rem;
            flex: 1;
          }

          .contact-info h2 {
            font-size: 1.5rem;
            color: #2d3748;
            margin-bottom: 1rem;
          }

          .contact-info p {
            color: #4a5568;
            margin: 0.5rem 0;
          }

          .contact-info .icon {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }

          .contact-info .icon svg {
            color: #10b981;
            font-size: 1.5rem;
          }

          /* Right section (form) */
          .contact-form {
            background: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 0.5rem;
            padding: 2rem;
            flex: 2;
          }

          .contact-form h2 {
            font-size: 1.75rem;
            color: #2d3748;
            margin-bottom: 1rem;
          }

          .contact-form form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-form label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #4a5568;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.375rem;
            font-size: 1rem;
            color: #2d3748;
            background-color: #f8fafc;
          }

          .contact-form input:focus,
          .contact-form textarea:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
          }

          .contact-form textarea {
            resize: none;
          }

          .contact-form button {
            width: 100%;
            padding: 0.75rem;
            background-color: #10b981;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .contact-form button:hover {
            background-color: #059669;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }

            .contact-info {
              margin-bottom: 1.5rem;
            }
          }
        `}
      </style>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="icon">
          <MapPin />
          <p>NY State Thruway, New York, USA</p>
        </div>
        <div className="icon">
          <Phone />
          <p>+1 292-901-2212</p>
        </div>
        <div className="icon">
          <Mail />
          <p>demo@demo.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>How can we improve your experience?</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter your subject" />
          </div>
          <div>
            <label htmlFor="message">Description</label>
            <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
