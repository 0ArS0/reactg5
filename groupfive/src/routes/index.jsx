import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Erro from '../pages/Erro';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/sobre' element={<Sobre />} ></Route>
        <Route path='/contato' element={<Contato />} ></Route>
        <Route path='*' element={<Erro />} ></Route>
    </Routes>
  )
}
