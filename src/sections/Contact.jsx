import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your actual EmailJS credentials
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        setSubmitStatus('success');
        setForm({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, (error) => {
        console.log(error.text);
        setLoading(false);
        setSubmitStatus('error');
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email Me</h3>
                  <p>hashirnadeem009@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>Call Me</h3>
                  <p>+92 347 8084055</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon location-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              {submitStatus === 'success' && (
                <div className="status-message success-message">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error-message">
                  <AlertCircle size={20} />
                  <span>Oops! Something went wrong. Please try again.</span>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;