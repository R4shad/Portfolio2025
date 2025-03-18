import './Footer.css'
import { FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-name">© 2025 Amir Barra</p>
      <a href="mailto:contact.amirbarra@gmail.com" className="contact-link">
        <FaEnvelope className="contact-icon" />
        contact.amirbarra@gmail.com
      </a>
    </footer>
  )
}
