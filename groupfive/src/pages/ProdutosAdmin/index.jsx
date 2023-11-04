import React, { useState, useEffect } from 'react'
import '../Home/style.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import axios from 'axios'
import './style.css'

export default function ProdutosAdmin() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/produto/listar/")
      .then(response => {
        setProdutos(response.data)
        console.log(response.data)  
      }).catch(() => {
        console.log("deu errado")
      })
  }, [])

  function deleteProduto(id) {
    axios.delete(`http://localhost:8080/api/produto/removerDefinitivo/${id}`)
    setProdutos(produtos.filter(produto => produto.id !== id));
  }

  return (
    <div>
      <Header />
      <main>
        <div className="btn-create">
          <Link to='/posts'>
            <button>Cadastrar novo produto</button>
          </Link>
        </div>
        <div className="cards">
          {produtos.map((produto, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2><em>{produto.nome}</em> - {produto.descricao}</h2>
                </header>
                <div className="line"></div>
                <p>ID: {produto.id}</p>
                <p>Categoria: {produto.categoriaDTO.nome}</p>
                <p>Valor: R${produto.valorUnit.toFixed(2)}</p>
                <p>Quantidade em estoque: {produto.qtdEstoque}</p>
                <img src={`src/assets/lyza.png`} alt={produto.categoriaDTO.nome} width="50px"/> {/*TODO: corrigir essa imagem */}
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={`/update/${produto.id}`}>
                      <button>editar</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deleteProduto(produto.id)}>apagar</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}