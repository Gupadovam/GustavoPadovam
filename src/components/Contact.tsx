import "../styles/components/contact.sass";
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly chat!</p>

      <div className="social-icons">
        <a 
          href="https://www.linkedin.com/in/gustavo-padovam-4769302ab/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={50} color="#6dbd53" />
        </a>
        <a 
          href="https://www.instagram.com/gustavopadovam" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={50} color="#6dbd53" />
        </a>
        <a 
          href="mailto:gupadovam@gmail.com" 
          aria-label="Email"
        >
          <FaEnvelope size={50} color="#6dbd53" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
