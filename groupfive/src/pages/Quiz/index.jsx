import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import "./style.css"
import { Link } from 'react-router-dom'

export default function Quiz() {
    const [selecao, setSelecao] = useState([])
    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false);

    const options = [
        "Tecnologia",
        "Games",
        "Cinema",
        "HQ's",
        "Anime/Manga",
        "StarTrek",
        "Todos"
    ];

    const handleOptionSelect = (option) => {
        if (selecao.length < 2) {
            setSelecao([...selecao, option]);
        }
    };

    const calculateGeekType = () => {
        if (selecao.length === 0) {
            return "Selecione ao menos uma opção"
        }

        if (selecao.includes("Todos")) {
            return "Geek Dork"
        }

        if (selecao.includes("Tecnologia")) {
            if (selecao.includes("Games")) {
                return "Geek Mor Gamer"
            }
            if (selecao.includes("Cinema")) {
                return "Geek Mor Cinéfilo"
            }
            if (selecao.includes("HQ's")) {
                return "Geek Mor Comic"
            }
            if (selecao.includes("StarTrek")) {
                return "Geek Mor Trekkie"
            }
            if (selecao.includes("Anime/Manga")) {
                return "Geek Mor Otaku"
            }
            return "Geek Mor"
        }
        if (selecao.includes("Games")) {

            if (selecao.includes("Cinema")) {
                return "Geek Gamer Cinéfilo"
            }
            if (selecao.includes("HQ's")) {
                return "Geek Comic Gamer"
            }
            if (selecao.includes("StarTrek")) {
                return "Geek Trekkie Gamer"
            }
            if (selecao.includes("Anime/Manga")) {
                return "Geek Otaku Gamer"
            }
            if (selecao.includes("Tecnologia")) {
                return "Geek Mor Gamer"
            }
            return "Geek Gamer"

        }
        if (selecao.includes("HQ's")) {

            if (selecao.includes("Cinema")) {
                return "Geek Comic Cinéfulo"
            }
            if (selecao.includes("StarTrek")) {
                return "Geek Trekkie Comic"
            }
            if (selecao.includes("Anime/Manga")) {
                return "Geek Otaku Comic"
            }
            if (selecao.includes("Tecnologia")) {
                return "Geek Mor Comic"
            }
            if (selecao.includes("Games")) {
                return "Geek Comic Gamer"
            }

            return "Geek Comic"
        }
        if (selecao.includes("StarTrek")) {

            if (selecao.includes("Anime/Manga")) {
                return "Geek Trekkie Otaku"
            }
            if (selecao.includes("Tecnologia")) {
                return "Geek Mor Trekkie"
            }
            if (selecao.includes("Gamer")) {
                return "Geek Trekkie Gamer"
            }
            if (selecao.includes("HQ's")) {
                return "Geek Trekkie Comic"
            }
            if (selecao.includes("Cinema")) {
                return "Geek Trekkie Cinéfilo"
            }

            return "Geek Trekkie"
        }
        if (selecao.includes("Anime/Manga")) {
            if (selecao.includes("Games")) {
                return "Geek Otaku Gamer";
            }
            if (selecao.includes("Cinema")) {
                return "Geek Otaku Cinéfilo";
            }
            if (selecao.includes("HQ's")) {
                return "Geek Otaku Comic";
            }
            if (selecao.includes("StarTrek")) {
                return "Geek Trekkie Otaku";
            }
            if (selecao.includes("Tecnologia")) {
                return "Geek Otaku Mor";
            }
            return "Geek Otaku"

        }
        if (selecao.includes("Cinema")) {
            if (selecao.includes("Games")) {
                return "Geek Cinéfilo Gamer";
            }
            if (selecao.includes("Anime/Manga")) {
                return "Geek Cinéfilo Otaku";
            }
            if (selecao.includes("HQ's")) {
                return "Geek Cinéfilo Comic";
            }
            if (selecao.includes("StarTrek")) {
                return "Geek Trekkie Cinéfilo";
            }
            if (selecao.includes("Tecnologia")) {
                return "Geek Cinéfilo Mor";
            }
            return "Geek Cinéfilo"
        }

    }

    const handleQuizSubmit = () => {
        const result = calculateGeekType();
        setResult(result);
    };

    const handleRestartQuiz = () => {
        setSelecao([]);
        setResult('');
        setShowResult(false);
    };

    return (
        <>
            <Header />
            <main className="pagina-quiz">
                <div className="titulo-quiz">

                    <h1>&gt;&gt;BEM VINDO JOVEM PADAWAN&lt;&lt;</h1>
                </div>
                <div className="meio1">
                    <div className="texto1">

                        <p>
                            Às vezes a gente fica falando de “geek” como se fosse algo super genérico,
                            como uma coisa só. Mas nada a ver, né?
                            Existem vários tipos de geek, cada um com sua peculiaridade e seu jeitinho.
                            Que tal você descobrir qual seu subtipo?
                        </p>
                    </div>
                </div>
                <div className="meio2">
                    <div className="texto2">
                        <p>
                            Você sabia que desde 2006, o dia 25 de maio é o dia do orgulho geek, também conhecido como dia do orgulho nerd.
                        </p>
                        <p>
                            Isso porque, nesse mesmo dia, em 1977, foi lançado nos cinemas o filme
                            “Star Wars – Episódio IV – Uma nova esperança”, um grande símbolo da cultura geek.
                        </p>

                        <p>
                            Clique no botão abaixo para utilizar nosso tradutor
                        </p>
                        <Link to="/tradutor"><button>Tradutor</button></Link>
                    </div>
                    {/* <div className="tradutor-api">
                        <h1>Tradutor Geek</h1>
                    </div> */}
                </div>
                <div className="quiz">
                        <h1>Quiz Geek</h1>
                    <div className="texto-quiz">

                        <p>O que você curte?
                        </p>
                        <p>
                            (Selecione até 2 respostas)
                        </p>
                    </div>
                    <div className="opcoes">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleOptionSelect(option)}
                                disabled={selecao.length === 2 || (selecao.length === 1 && selecao[0] === "Todos")}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="opcao-envio">
                            


                        <button onClick={handleQuizSubmit}>Enviar Quiz</button>
                        {result && (
                            <div>
                                <p>Resultado:</p>
                                <p>{result}</p>
                                <button onClick={handleRestartQuiz}>Refazer Quiz</button>
                            </div>
                        )}
                        
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}
