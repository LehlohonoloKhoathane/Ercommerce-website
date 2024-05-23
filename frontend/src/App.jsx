import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { getLoginStatus } from './redux/features/auth/authSlice';
import Profile from './pages/profile/Profile';

function App() {
  // const [count, setCount] = useState(0)
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch])

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
