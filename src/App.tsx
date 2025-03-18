import { useEffect, useState } from 'react'
import './App.css'
import Main from './Componets/Main/Main'
import Header from './Componets/Header/Header'
import { Endpoint } from './Componets/Endpoint/Endpoint'

import { records } from './data.d'
import { certifications } from './data.d'
import { workExperience } from './data.d'
import { skills } from './data.d'
import { projects } from './data.d'
import { PostEndpoint } from './Componets/PostEndpoint/PostEndpoint'
import { Footer } from './Componets/Footer/Footer'

function App() {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 340)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      {showNavbar && <Header />}
      <Main />

      <Endpoint data={records} />
      <Endpoint data={certifications} />
      <Endpoint data={workExperience} />
      <Endpoint data={skills} />
      <Endpoint data={projects} />
      <PostEndpoint />
      <Footer />
    </div>
  )
}

export default App
