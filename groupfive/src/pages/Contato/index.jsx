import React from 'react'
import HeaderMain from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function Contato() {
    return (
        <>
            <HeaderMain />
            <main className="contato">
                <h2>CONTATO</h2>
                <div className="card-body-post">
                    <form action="#">
                        <div className="fields">
                            <label htmlFor="nome">Nome: </label>
                            <input
                                placeholder="Nome"
                                type="text"
                                id="nome"
                                name="nome"
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="email">Email: </label>
                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="telefone">Telefone: </label>
                            <input
                                placeholder="(XX) XXXXX-XXXX"
                                type="text"
                                id="telefone"
                                name="telefone"
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="assunto">Assunto: </label>
                            <input
                                placeholder="Assunto"
                                type="text"
                                id="assunto"
                                name="assunto"
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="mensagem">Mensagem: </label>
                            <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Mensagem"></textarea>
                        </div>
                        <button>
                            Enviar
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
