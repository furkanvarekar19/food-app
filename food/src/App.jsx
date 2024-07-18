
import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import AboutUs from './componets/AboutUs'
import OurFood from './componets/OurFood'
import Home from './componets/Home'
import Signin from './componets/Signin'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [count , setCount] = useState(0);

   function handleAdd(){
    setCount(count +1)
   }

  return (
    <>
     <div>
      <BrowserRouter>
        <Header count ={count} />
      <Routes>
        <Route path='/' element={<Home handleAdd={handleAdd}/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/ourfood' element={<OurFood  handleAdd={handleAdd}/>}/>
        <Route path='/signin' element={<Signin/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
     </div>
    </>
  )
}

export default App
