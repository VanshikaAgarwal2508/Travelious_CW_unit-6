import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Discover from './components/Products/Discover'
import Details from './components/Products/Details'
import Payments from './components/Payments/Payments'
import GuestInformation from './components/Payments/GuestInfromation'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/discover'element={<Discover/>}/>
            <Route path='/discover/:id'element={<Details/>}/>
            <Route path="/Payments" element={<Payments />} />
            <Route path="/details" element={<GuestInformation />} />

        </Routes>
      
    </div>
  )
}

export default MainRoutes
