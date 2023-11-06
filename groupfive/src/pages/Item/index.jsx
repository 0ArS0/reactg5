import React, { useEffect, useState } from 'react'
import HeaderMain from '../../components/Header'
import Footer from '../../components/Footer'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './style.css'

export default function Item() {
  const [produto, setProduto] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/api/produto/buscar/${id}`)
      .then(response => {
        setProduto(response.data)
      }).catch(() =>
        console.log("produto nao encontrado"))
  }, [])

  if (produto !== null) {
    const produtoFiltrado = [produto]
    return (
      <>
        <HeaderMain />
        <main>
          {produtoFiltrado.map((produto, key) => {
            return (
              <div className="produto-item" key={key}>
                <div className='pagina-item'>
                  <div className="img-item">
                    <img src={`../../src/assets/${produto.descricao}`} alt={`${produto.descricao}`} />
                  </div>
                  <div className="caixa-info-item">
                    <div className="info-item">
                      <div className="titulo-item">
                        <h2>{produto.nome}</h2>
                        <hr />
                      </div>
                      <p>Preço: R${produto.valorUnit.toFixed(2)}</p>
                      <p>Quantidade no estoque: {produto.qtdEstoque}</p>
                      <p>Funcionário responsavel: {produto.funcionarioResponseDTO.nomeUsuario}</p>
                      <div className="compra">
                        <Link to="/"><button>Comprar</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </main>
        <Footer />
      </>
    )
  } else {
    return null
  }
}
