import React from 'react'
import HomePage from './pages/HomePage'
import About from './Components/About'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
import TourPackage from './pages/TourPackage'
import DetailPackage from './pages/DetailPackage'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />

      <Route path="/about" element={<About/>}/>
      <Route
       path="/tour-package/:tourPackageId"
        element={<DetailPackage/>}/>

      
      <Route path="/tour-package" element={<TourPackage/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
