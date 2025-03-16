import ShinyText from './ShinyText'
import './Main.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Readme } from './Readme'

const Main = () => {
  return (
    <div className="main-container">
      <img className="img-perfil" src="/perfil.JPG" alt="Profile" />
      <ShinyText
        text="AMIR BARRA - SYSTEMS ENGINEER"
        disabled={false}
        speed={2}
        className="h1"
      />
      <ShinyText
        text="Software Developer and IT"
        disabled={false}
        speed={2}
        className="h2"
      />
      <div className="navbar-icons">
        <a
          href="https://github.com/R4shad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github" />
        </a>
        <a
          href="www.linkedin.com/in/amir-barra-it"
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
      <Readme />
    </div>
  )
}

export default Main
