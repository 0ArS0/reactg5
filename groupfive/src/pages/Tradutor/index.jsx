import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import './style.css'

export default function Tradutor() {

    const [inputText, setInputText] = useState('');
    const [selectedApi, setSelectedApi] = useState(null);
    const [translationResult, setTranslationResult] = useState('');


    const translationApis = [
        { name: 'Yoda', endpoint: 'yoda' },
        { name: 'Sith', endpoint: 'sith' },
        { name: 'Gungan', endpoint: 'gungan' },
        { name: 'Mandalorian', endpoint: 'mandalorian' },
        { name: 'Huttese', endpoint: 'huttese' },
        { name: 'Cheunh', endpoint: 'cheunh' },
        { name: 'Groot', endpoint: 'groot' },
    ];

    const translateText = async () => {
        if (selectedApi === null || inputText.trim() === '') {
            return;
        }

        const endpoint = translationApis[selectedApi].endpoint;
        const url = `https://api.funtranslations.com/translate/${endpoint}.json?text=${inputText}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.contents && data.contents.translated) {
                setTranslationResult(data.contents.translated);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <main className="pagina-tradutor">
                <div className='caixaB'>
                    <div className='titulo-tradutor'>
                        <h1>&gt;&gt; Tradutor Geek &lt;&lt;</h1>
                    </div>
                    <div className="texto-tradutor">
                        <p>Imagina só, você em uma galáxia distante, rodeado de alienígenas e línguas estranhas por todos os lados. Aí entra o Tradutor de Línguas Geeks, a sua chave para se divertir nesse playground intergaláctico!</p>
                        <p>Com ele, você pode falar como um Jedi sábio, um Sith sinistro ou até um Gungan engraçado. É como um passaporte para a diversão no espaço sideral! Faça novos amigos de todas as formas e tamanhos e desvende mistérios cósmicos.</p>
                        <p>Não importa se você é um fã de Star Wars, Star Trek ou qualquer outra série geek, o Tradutor de Línguas Geeks vai tornar a sua jornada intergaláctica uma aventura incrivelmente divertida. Dê as boas-vindas à diversão e embarque nessa viagem épica! 😄🚀👽</p>
                    </div>
                    <div className='tradutor'>
                        <label htmlFor="inputText">Digite o texto em inglês:</label>
                        <textarea
                            type="text"
                            id="inputText"
                            placeholder='Digite um texto em inglês'
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <div className='caixaA'>
                            <div className='botoes-api'>
                                {translationApis.map((api, index) => (
                                    <button className="button" key={index} onClick={() => setSelectedApi(index)}>
                                        {api.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="botao-enviar">
                            <button className="button" onClick={translateText}>Traduzir</button>
                            {translationResult && (
                                <div>
                                    <p>Resultado da Tradução:</p>
                                    <p>{translationResult}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
