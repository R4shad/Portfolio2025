import './Header.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="img-perfil-navbar" src="/perfil.JPG" alt="Profile" />
        <div className="navbar-text">
          <h1 className="name">Amir Barra - Systems Engineer</h1>
          <h2 className="area">Web Developer and IT</h2>
        </div>
      </div>

      <div className="navbar-icons">
        <a
          href="https://github.com/R4shad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github" />
        </a>
        <a
          href="https://www.linkedin.com/in/amir-barra-it"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin" />
        </a>
        <a
          href="https://www.instagram.com/r4shad_404/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" />
        </a>
      </div>
    </nav>
  )
}

export default Header
