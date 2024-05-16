import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import './App.css'
import Home from './pages/home/home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/home/auth/Login';
import Register from './pages/home/auth/register';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  // const [count, setCount] = useState(0)
  axios.defaults.withCredentials = true
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
