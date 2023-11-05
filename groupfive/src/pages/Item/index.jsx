import React, { useEffect, useState } from 'react'
import HeaderMain from '../../components/Header'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
        <div>
          {produtoFiltrado.map((produto, key) => {
            return (
              <div className="produto" key={key}>
                <img src={`../../src/assets/${produto.descricao}`} alt={`${produto.descricao}`} />
                <p>{produto.nome}</p>
                <p>Preço: R${produto.valorUnit.toFixed(2)}</p>
              </div>
            )
          })}
        </div>
        <Footer />
      </>
    )
  } else {
    return null
  }
}
