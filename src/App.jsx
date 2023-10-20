import { AboutUs, Blockchain, Company, ContactUs, CyberSecurity, DataScience, Ecommerce, Header, HireADeveloper, HireTeams, OnlineMarket, PortfolioPage, Services } from './components'
import { Footer } from './components'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Whatsapp from './whatsapp/Whatsapp'
function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location]);


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Company />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blockchain' element={<Blockchain />} />
        <Route path='/cybersecurity' element={<CyberSecurity />} />
        <Route path='/datascience' element={<DataScience />} />
        <Route path='/e-commerce' element={<Ecommerce />} />
        <Route path='/onlinemarketplaces' element={<OnlineMarket />} />
        <Route path='/product-development-services' element={<HireTeams />} />
        <Route path='/hire-a-developer' element={<HireADeveloper />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/talk-to-us' element={<ContactUs />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </>
  )
}

export default App
