import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("Preencha o nome do produto")
    .max(40, "Até 40 caracteres"),
  descricao: yup
    .string()
    .required("Preencha a descrição")
    .max(100, "Até 100 caracteres"),
  qtdEstoque: yup
    .number()
    .required("Preencha a quantidade em estoque")
    .positive()
    .integer(),
  valorUnit: yup
    .number()
    .required("Preencha o valor do produto")
    .positive(),
  dataFab: yup
    .date()
    .required("Defina a data de fabricação"),
  categoriaDTO: yup.object().shape({
    nome: yup.string().required("Insira a categoria do produto").max(20, "Até 20 caracteres")
  }),
  funcionarioResponseDTO: yup.object().shape({
    nome: yup.string().required("Insira o nome do funcionário cadastrante").max(20, "Até 20 caracteres")
  })

})

export default function Posts() {
  const [categorias, setCategorias] = useState([])

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/categoria/listar")
      .then(response => {
        setCategorias(response.data)
      })
  }, [])

  const [funcionarios, setFuncionarios] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/funcionario/listar")
      .then(response => {
        setFuncionarios(response.data)
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(validationPost) })

  const addPost = (data) => axios.post("http://localhost:8080/api/produto/salvar", data)
    .then(() => {
      console.log("deu certo")
      navigate("/produtosAdmin/")
    }).catch(() => {
      console.log("deu errado")
    })

  return (
    <div>
      <Header />
      <main>
        <h2>CADASTRO DE PRODUTOS</h2>
        <div className="card-body-post">
          <form action="#" onSubmit={handleSubmit(addPost)}>
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
              <input type=""
                name="qtdEstoque"
                id="qtdEstoque"
                {...register("qtdEstoque")} />
              <p className="error-message">{errors.qtdEstoque?.message}</p>
            </div>

            <div className="fields">
              <label htmlFor="valorUnit">Valor unitário: </label>
              <input type="number"
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
