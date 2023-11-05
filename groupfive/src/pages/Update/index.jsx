import { yupResolver } from '@hookform/resolvers/yup'
import Header from '../../components/Header'
import * as yup from "yup"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Footer from '../../components/Footer'

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .max(40, "Até 40 caracteres"),
  descricao: yup
    .string()
    .max(100, "Até 100 caracteres"),
  qtdEstoque: yup
    .number()
    .positive()
    .integer(),
  valorUnit: yup
    .number()
    .positive(),
  dataFab: yup
    .date(),
  categoriaDTO: yup.object().shape({
    nome: yup.string()
  }),
  funcionarioResponseDTO: yup.object().shape({
    nome: yup.string()
  })
})

export default function Update() {
  const [categorias, setCategorias] = useState([])

  const [funcionarios, setFuncionarios] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/funcionario/listar")
      .then(response => {
        setFuncionarios(response.data)
      })
  })

  let navigate = useNavigate()
  const { id } = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(validationPost) })

  useEffect(() => {
    axios.get("http://localhost:8080/api/categoria/listar")
      .then(response => {
        setCategorias(response.data)
      })
  }, [])

  const addPut = (data) => axios.put(`http://localhost:8080/api/produto/atualizar/${id}`, data)
    .then(() => {
      console.log("deu certo")
      navigate("/produtosAdmin/")
    }).catch(() => {
      console.log("deu errado")
    })

    (/*TODO: remover obrigatoriedade em todos os parâmetros */)
  return (
    <div>
      <Header />
      <main>
        <h2>UPDATE DE PRODUTOS</h2>
        <div className="card-body-post">
          <form action="#" onSubmit={handleSubmit(addPut)}>
            <div className="fields">
              <label htmlFor="nome">Nome: </label>
              <input
                type="text"
                id="nome"
                name="nome"
                {...register("nome")}
              />
              <p className="error-message">{errors.titulo?.message}</p>
            </div>
            <div className="fields">
              <label htmlFor="descricao">Descrição: </label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                {...register("descricao")}
              />
              <p className="error-message">{errors.descricao?.message}</p>
            </div>

            <div className="fields">
              <label htmlFor="qtdEstoque">Quantidade em estoque: </label>
              <input type="number"
                name="qtdEstoque"
                id="qtdEstoque"
                {...register("qtdEstoque")} />
              <p className="error-message">{errors.qtdEstoque?.message}</p>
            </div>

            <div className="fields">
              <label htmlFor="valorUnit">Valor unitário: </label>
              <input type="number" min="0" step="1"
                name="valorUnit"
                id="valorUnit"
                {...register("valorUnit")} />
              <p className="error-message">{errors.valorUnit?.message}</p>
            </div>

            <div className="fields">
              <label htmlFor="dataFab">Data de fabricação: </label>
              <input type="date"
                name="dataFab"
                id="dataFab"
                {...register("dataFab")} />
              <p className="error-message">{errors.dataFab?.message}</p>
            </div>

            <div className="fields">
              <label htmlFor="categoriaDTO.nome">Categoria: </label>
              <select
                type="text"
                name="categoriaDTO.nome"
                id="categoriaDTO.nome"
                {...register("categoriaDTO.nome")}>
                {categorias.map((categoria, key) => {
                  return (<option key={key} value={categoria.nome}>{categoria.nome}</option>)
                })}
              </select>
              <p className="error-message">{errors.categoriaDTO?.message}</p>
            </div>

            <div className="fields">
              <label htmlFor="funcionarioResponseDTO.nome">Nome do funcionário: </label>
              <select
                type="text"
                name="funcionarioResponseDTO.nome"
                id="funcionarioResponseDTO.nome"
                {...register("funcionarioResponseDTO.nome")}>
                {funcionarios.map((funcionario, key) => {
                  return (<option key={key} value={funcionario.nome}>{funcionario.nome}</option>)
                })}
              </select>
              <p className="error-message">{errors.funcionarioResponseDTO?.message}</p>
            </div>
            
            <div className="btn-post">
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
