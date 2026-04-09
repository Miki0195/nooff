import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ServiceDetailPage from './components/ServiceDetailPage'
import LegalPage from './components/LegalPage'

function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 80)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/szolgaltatas/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/impresszum" element={<LegalPage type="imprint" />} />
          <Route path="/adatvedelem" element={<LegalPage type="privacy" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
