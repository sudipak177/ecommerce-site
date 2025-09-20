import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/orders' element = {<Orders/>}/>
        <Route path='/PlaceOrder' element = {<PlaceOrder/>}/>
        <Route path='/Product/:productId' element = {<Product/>}/>
        <Route path='/Login' element = {<Login/>}/>
      </Routes>

    </div>
    </>
  )
}

export default App
