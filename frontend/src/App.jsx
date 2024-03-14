import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import './App.css'
import Home from './pages/home/home';
import Header from './components/header/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
