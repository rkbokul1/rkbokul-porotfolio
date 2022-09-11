import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect( ()=>{
    AOS.init();
  },[]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      
      <ToastContainer />
    </>
  );
}

export default App;
