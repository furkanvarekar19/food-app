
import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import AboutUs from './componets/AboutUs'
import OurFood from './componets/OurFood'
import Home from './componets/Home'
import Signin from './componets/Signin'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
     <div>
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/ourfood' element={<OurFood/>}/>
        <Route path='/signin' element={<Signin/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
     </div>
    </>
  )
}

export default App
