import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Discover from './components/Products/Discover'
import Details from './components/Products/Details'
import HomePage from "./components/HomePage"
// import Discover from './components/Products/Discover'
import { Login } from './components/MainComp/Login'
import { Signup } from './components/MainComp/Signup'
import Payments from './components/Payments/Payments'
import GuestInfromation from './components/Payments/GuestInfromation'
import Thankyou from './components/Payments/Thankyou'
import PageNotFound from './components/MainComp/PageNotFound'
import Navbar from './components/MainComp/Navbar'
import Footer from './components/MainComp/Footer'

const MainRoutes = () => {
 
  //  const store= useSelector((state)=>state)

  //  console.log(store)


//   return (
//     <div>


//         <Routes>
 
//            <Route path='/'element={<HomePage/>}/>
//             <Route path='/discover'element={<Discover/>}/>
//             <Route path='/discover/:id'element={<Details/>}/>
//             <Route path='/payment/:id'element={<Payments/>}/>
//             <Route path='/payment-details'element={<GuestInfromation/>}/>
//             <Route path='/thankyou'element={<Thankyou/>}/>
//             <Route path='/login'element={<Login/>}/>
//             <Route path='/register'element={<Signup/>}/>
//             <Route path="*" element={<PageNotFound/>}/>

//         </Routes>
      
//     </div>
//   )
// }



const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
       <HomePage/>
        <Footer />
      </>
    ),
  },
  
  {
    path: "*",
    element: (
      <>
       <PageNotFound/>
      </>
    ),
  },

  {
    path: "/login",
    element: (
      <>
        <Login />,
      
        <Footer />
      </>
    ),
  },
  {
    path: "/payment/:id",
    element: (
      <>
        <Navbar />
        <Payments/>,
        
        <Footer />
      </>
    ),
  },
 
  {
    path: "/discover/:id",
    element: (
      <>
        <Navbar />
       <Details/>
        <Footer />
      </>
    ),
  },
 

  {
    path: "/discover",
    element: (
      <>
        <Navbar />
        <Discover/>
        <Footer />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
       
        <Signup/>
        <Footer />
      </>
    ),
  },
  {
    path: "/payment-details",
    element: (
      <>
        <Navbar />
      <GuestInfromation/>
        <Footer />
      </>
    ),
  },
];

return (
  <Routes>
    {routes.map((elem, i) => {
      return (
        <Route
          key={i}
          path={elem.path}
          element={<>{elem.element}</>}
        />
      );
    })}
  </Routes>
);
}

export default MainRoutes
