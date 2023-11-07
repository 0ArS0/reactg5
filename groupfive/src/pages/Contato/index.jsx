import React, { useState } from 'react'
import HeaderMain from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemNotificacao, setMensagemNotificacao] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (nome && email && telefone && assunto && mensagem) {
            setMensagemNotificacao('Mensagem enviada com sucesso!');
            setNome('');
            setEmail('');
            setTelefone('');
            setAssunto('');
            setMensagem('');
        } else {
            setMensagemNotificacao('Por favor, preencha todos os campos.');
        }
    };
    return (
        <>
            <HeaderMain />
            <main className="contato">
                <h2>CONTATO</h2>
                <div className="card-body-post">
                    <form onSubmit={handleSubmit}>
                        <div className="fields">
                            <label htmlFor="nome">Nome: </label>
                            <input
                                placeholder="Nome"
                                type="text"
                                id="nome"
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="email">Email: </label>
                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="telefone">Telefone: </label>
                            <input
                                placeholder="(XX) XXXXX-XXXX"
                                type="text"
                                id="telefone"
                                name="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="assunto">Assunto: </label>
                            <input
                                placeholder="Assunto"
                                type="text"
                                id="assunto"
                                name="assunto"
                                value={assunto}
                                onChange={(e) => setAssunto(e.target.value)}
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
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='botaoEnviar'>
                            <button type='submit'>
                                Enviar
                            </button>
                        </div>
                        <div className='notificacao'>
                            {mensagemNotificacao}
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
