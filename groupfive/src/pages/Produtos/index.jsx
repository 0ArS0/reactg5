import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../components/Footer';
import '../Produtos/style.css'

export default function Produtos() {
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
                                        src="src/assets/Camisa-Lyza.png"
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
                    <p>Não teve interesse nos nossos destaques? Sem problemas, explore atráves das nossas categorioas</p>
                    <div id="camisas" className="categoria">
                        <div className="titulo">
                        <h3>Camisas</h3> <hr />
                        </div>
                        <div className="produtos-categoria">
                        
                        <div className="produto">
                            <img src="src/assets/Camisa-Pato.png" alt="Camisa 1" />
                            <p>Camisa Preta Pato</p>
                            <p>Preço: $19.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Camisa-Lyza.png" alt="Camisa 2" />
                            <p>Camisa Preta Lyza</p>
                            <p>Preço: $49.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Camisa-minecraft.png" alt="Camisa 3" />
                            <p>Camisa Preta LoL</p>
                            <p>Preço: $19.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Camisa-pac-man.png" alt="Camisa 4" />
                            <p>Camisa Preta Minecraft</p>
                            <p>Preço: $24.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Camisa-playstation.png" alt="Camisa 5" />
                            <p>Camisa Preta Pac-man</p>
                            <p>Preço: $39.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Camisa-xbox.png" alt="Camisa 6" />
                            <p>Camisa Preta Playstation</p>
                            <p>Preço: $19.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Camisa-LoL.png" alt="Camisa 7" />
                            <p>Camisa Preta Xbox</p>
                            <p>Preço: $24.99</p>
                        </div>
                    </div>
                    </div>
                    <div className="categoria">
                        <div className="titulo">
                        <h3>Decoração</h3><hr />
                        </div>
                        <div className="produtos-categoria">
                        <div className="produto">
                            <img src="src/assets/Quadro-Jar-Jar-Binks.png" alt="Decoração 1" />
                            <p>Quadro Jar-Jar Binks</p>
                            <p>Preço: $69.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Quadro-irmao-do-jorel.png" alt="Decoração 2" />
                            <p>Quadro Irmao Do Jorel</p>
                            <p>Preço: $59.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Quadro-mario.png" alt="Decoração 3" />
                            <p>Quadro Mario</p>
                            <p>Preço: $44.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Quadro-rick.png" alt="Decoração 4" />
                            <p>Quadro Rick&Morty</p>
                            <p>Preço: $39.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Quadro-Zelda.png" alt="Decoração 5" />
                            <p>Quadro Zelda</p>
                            <p>Preço: $99.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Quadros-homer-pac-man.png" alt="Decoração 6" />
                            <p>Quadros homer e Pac-man</p>
                            <p>Preço: $154.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Quadros-star-wars.png" alt="Decoração 7" />
                            <p>Quadros star-wars</p>
                            <p>Preço: $199.99</p>
                        </div>
                        </div>
                    </div>
                    <div className="categoria">
                        <div className="titulo">
                        <h3>Acessórios</h3><hr />
                        </div>
                        <div className="produtos-categoria">
                        <div className="produto">
                            <img src="src/assets/Controle-Dragon-Ball.png" alt="Acessorios 1" />
                            <p>Controle Dragon Ball</p>
                            <p>Preço: $129.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Controle-Naruto.png" alt="Acessorios 2" />
                            <p>Controle Naruto</p>
                            <p>Preço: $149.99</p>
                        </div>
                        <div className="produto">
                            <img src="src/assets/Controle-Naruto2.png" alt="Acessorios 3" />
                            <p>Controle Naruto</p>
                            <p>Preço: $99.99</p>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
