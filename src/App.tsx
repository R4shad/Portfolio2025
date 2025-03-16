import { useEffect, useState } from 'react'
import './App.css'
import Main from './Componets/Main/Main'
import Header from './Componets/Header/Header'

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
    </div>
  )
}

export default App
