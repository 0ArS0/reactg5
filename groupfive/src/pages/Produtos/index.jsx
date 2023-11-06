import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Header from '../../components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../components/Footer';
import '../Produtos/style.css'
import axios from 'axios';

export default function Produtos() {
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
    axios.get("http://localhost:8080/api/categoria/listar/")
      .then(response => {
        setCategorias(response.data)
      }).catch(() => {
        console.log("nao encontrou categoria")
      })
  })

  return (
    <div>
      <Header />
      <main className="produtos">
        <div className="hotProds">
          <h1>Produtos Populares</h1>
          <p>Abaixo são os produtos mais comprados</p>
          <div className="Carrousel" style={{ display: "block" }}>
            <Carousel controls={false} indicators={true} indicatorLabels={["btn1", "btn2", "btn3", "btn4"]} className='carrossel'>
              <Carousel.Item interval={3400}>
                <Link>
                  <img className='d-block w100'
                    src="src/assets/Camisa-Lyza-morticia.png"
                    alt="Image One" />
                </Link>
              </Carousel.Item>
              <Carousel.Item interval={2800}>
                <Link>
                  <img className='d-block w100'
                    src="src/assets/Quadro-Jar-Jar-Binks.png"
                    alt="Image Two"
                  />
                </Link>
              </Carousel.Item>
              <Carousel.Item interval={2800}>
                <Link>
                  <img className='d-block w100'
                    src="src/assets/Caneca-Vicente-Jóia.png"
                    alt="Image Three"
                  />
                </Link>
              </Carousel.Item>
              <Carousel.Item interval={2800}>
                <Link>
                  <img className='d-block w100'
                    src="src/assets/Camisa-Pato.png"
                    alt="Image Four"
                  />
                </Link>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="container-categorias">
          <h2>Categorias</h2>
          <p>Não teve interesse nos nossos destaques? Sem problemas, explores através das nossas categorias</p>
          {categorias.map((categoria, key) => {
            const produtosFiltrados = produtos.filter((produto) => produto.categoriaDTO.nome == categoria.nome);
            return (
              <div className="categoria" key={key}>
                <div className="titulo">
                  <h3 id={categoria.nome}>{categoria.nome}</h3> <hr />
                </div>

                <div className="produtos-categoria">
                  {produtosFiltrados.map((produto, key) => {
                    return (
                      <div className="produto" key={key}>
                        <Link to={`item/${produto.id}`}>
                          <img src={`../src/assets/${produto.descricao}`} alt={`${produto.descricao}`} />
                        </Link>
                        <p>{produto.nome}</p>
                        <p>Preço: R${produto.valorUnit.toFixed(2)}</p>
                      </div>
                    );
                  })}
                </div>
                <div id={categoria.nome}></div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}
