import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Register from './pages/Register';

function App() {

  const { user } = useSelector(state => state.starter);

  useEffect(() => {

  }, [])


  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      {user ? <Route path="*" element={<Perfil />} /> : <Route path="*" element={<Login />} />}
    </Routes>
  );
}

export default App;