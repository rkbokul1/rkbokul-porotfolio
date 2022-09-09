import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
