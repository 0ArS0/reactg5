import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Erro from '../pages/Erro';
import Update from '../pages/Update';
import ProdutosAdmin from '../pages/ProdutosAdmin';
import Posts from '../pages/Posts';
import Produtos from '../pages/Produtos';
import Camisas from '../pages/Produtos/Camisas';
import Decoracao from '../pages/Produtos/decoracao';
import Acessorios from '../pages/Produtos/acessorios';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/produtos' element={<Produtos />} ></Route>
        <Route path='/produtos/camisas' element={<Camisas />} ></Route>
        <Route path='/produtos/decoracao' element={<Decoracao />} ></Route>
        <Route path='/produtos/acessorios' element={<Acessorios />} ></Route>
        <Route path='/produtosAdmin' element={<ProdutosAdmin/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='*' element={<Erro />} ></Route>
    </Routes>
  )
}
