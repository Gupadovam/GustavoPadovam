import "../styles/components/contact.sass";
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id= "contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly chat!</p>
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gustavo-padovam-4769302ab/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#6dbd53" />
        </a>
        <a href="https://www.instagram.com/gustavopadovam" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color="#6dbd53" />
        </a>
        <a href="gupadovam@gmail.com">
          <FaEnvelope size={30} color="#6dbd53" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
