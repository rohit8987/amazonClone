import './App.css'
// import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import Products from './screen/Products/Products'
import Footer from './Component/Footer/Footer'
import Cart from './screen/Cart/Cart'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route  path='/' element= { <HomeScreen />}/>
        <Route path='/product' element={<Products/>}/> 
        <Route path='/cart' element ={<Cart/>}/>
      </Routes>
      <Footer/>
     

    </>
  )
}

export default App
