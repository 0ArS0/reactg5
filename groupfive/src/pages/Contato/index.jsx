import React from 'react';
import HeaderMain from '../../components/Header'
import Footer from '../../components/Footer';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("Preencha o nome do produto")
    .max(40, "Até 40 caracteres"),
  telefone: yup
    .string()
    .required("Preencha o telefone")
    .max(40, "Até 40 caracteres"),
  email: yup
    .string()
    .required("Obrigatório preencher o email")
    .max(50, "Até 50 caracteres"),
  assunto: yup
    .string()
    .required("Insira o assunto da sua mensagem")
    .max(40, "Até 40 caracteres"),
  mensagem: yup
    .string()
    .required("Insira a mensagem")
    .max(400, "Até 400 caracteres")
})

export default function Contato() {

  let navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors} } = useForm({resolver:yupResolver(validationPost)})

  const addPost = (data) => axios.post("http://localhost:8080/api/email/enviar/", data)
    .then(() => {
      console.log("Email enviado")
      alert("Mensagem enviada com sucesso!")
      navigate("/")

    }).catch(() => {
      console.log("Email não enviado")
    })

    return (
        <>
            <HeaderMain />
            <main className="contato">
                <h2>CONTATO</h2>
                <div className="card-body-post">
                    <form action="#" onSubmit={handleSubmit(addPost)}>
                        <div className="fields">
                            <label htmlFor="nome">Nome: </label>
                            <input
                                placeholder="Nome"
                                type="text"
                                id="nome"
                                name="nome"
                                {...register("nome")}
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="email">Email: </label>
                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                name="email"
                                {...register("email")}
                            />
                            <p className="error-message">{errors.titulo?.message}</p>
                        </div>
                        <div className="fields">
                            <label htmlFor="telefone">Telefone: </label>
                            <input
                                placeholder="(XX) XXXXX-XXXX"
                                type="text"
                                id="telefone"
                                name="telefone"
                                {...register("telefone")}
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="assunto">Assunto: </label>
                            <input
                                placeholder="Assunto"
                                type="text"
                                id="assunto"
                                name="assunto"
                                {...register("assunto")}
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="mensagem">Mensagem: </label>
                            <textarea
                                name="mensagem"
                                id="mensagem"
                                cols="30"
                                rows="10"
                                placeholder="Mensagem"
                                {...register("mensagem")}
                            ></textarea>
                        </div>
                        <div className='botaoEnviar'>
                            <button type='submit'>
                                Enviar
                            </button>
                        </div>
                        <div className='notificacao'>
                            {/* {mensagemNotificacao} */}
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
