import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Erro from '../pages/Erro';
import Update from '../pages/Update';
import ProdutosAdmin from '../pages/ProdutosAdmin';
import Posts from '../pages/Posts';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/produtosAdmin' element={<ProdutosAdmin/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='*' element={<Erro />} ></Route>
    </Routes>
  )
}
