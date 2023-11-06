import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Header from '../../../components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../components/Footer';
import '../../Produtos/style.css'
import axios from 'axios';

export default function Camisas() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/produto/listar/")
      .then(response => {
        setProdutos(response.data)
      }).catch(() => {
        console.log("nao encontrou produto")
      })
  }, [])

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/categoria/listar/`)
      .then(response => {
        setCategorias(response.data)
      }).catch(() => {
        console.log("nao encontrou categoria")
      })
  })

  const categoriaFiltrada = categorias.filter((categoria) => categoria.nome == "Camisas");

  return (
    <>
      <Header />
      <main className="camisas">
        {categoriaFiltrada.map((categoria, key) => {
          const produtosFiltrados = produtos.filter((produto) => produto.categoriaDTO.nome == "Camisas");
          return (
            <div className="categoria" key={key} id={`{categoria.nome}`}>
              <div className="titulo">
                <h3>{categoria.nome}</h3> <hr />
              </div>

              <div className="produtos-categoria">
                {produtosFiltrados.map((produto, key) => {
                  return (
                    <div className="produto" key={key}>
                      <Link to={`/produtos/item/${produto.id}`}>
                        <img src={`../src/assets/${produto.descricao}`} alt={`${produto.descricao}`} />
                      </Link>
                      <p>{produto.nome}</p>
                      <p>Preço: R${produto.valorUnit.toFixed(2)}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </main>
      <Footer />
    </>
  )
}
