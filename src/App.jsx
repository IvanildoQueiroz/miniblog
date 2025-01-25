import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'

import './App.css'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  return (
    
      <div>
       <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
        <Footer/>
       </Router>
      </div>
  
  )
}

export default App
