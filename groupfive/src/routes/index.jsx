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
import Item from '../pages/Item';
import Quiz from '../pages/Quiz';
import Tradutor from '../pages/Tradutor';
import Contador from '../components/Contador';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/contador' element={<Contador />} ></Route>
        <Route path='/produtos' element={<Produtos />} ></Route>
        <Route path='/produtos/camisas' element={<Camisas />} ></Route>
        <Route path='/produtos/decoracao' element={<Decoracao />} ></Route>
        <Route path='/produtos/acessorios' element={<Acessorios />} ></Route>
        <Route path='/produtosAdmin' element={<ProdutosAdmin/>}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path='/produtos/item/:id'element={<Item />}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/quiz' element={<Quiz />} ></Route>
        <Route path='/tradutor' element={<Tradutor />} ></Route>
        <Route path='*' element={<Erro />} ></Route>
    </Routes>
  )
}
