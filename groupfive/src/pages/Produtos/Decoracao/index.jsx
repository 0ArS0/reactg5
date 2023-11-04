import React from 'react'
import '/src/pages/Produtos/style.css'
import HeaderMain from '../../../components/Header'
import Footer from '../../../components/Footer'
import './style.css'

export default function Decoracao() {
    return (
        <>
            <HeaderMain />
            <main className="decoracao">
                <div className="container-categorias">
                    <div className="categoria">
                        <h3>Decoração</h3> <hr />
                        <div className="produto">
                            <img src="../src/assets/Quadro-Jar-Jar-Binks.png" alt="Decoração 1" />
                            <p>Quadro Jar-Jar Binks</p>
                            <p>Preço: $69.99</p>
                        </div>
                        <div className="produto">
                            <img src="../src/assets/Quadro-irmao-do-jorel.png" alt="Decoração 2" />
                            <p>Quadro Irmao Do Jorel</p>
                            <p>Preço: $59.99</p>
                        </div>
                        <div className="produto">
                            <img src="../src/assets/Quadro-mario.png" alt="Decoração 3" />
                            <p>Quadro Mario</p>
                            <p>Preço: $44.99</p>
                        </div>
                        <div className="produto">
                            <img src="../src/assets/Quadro-rick.png" alt="Decoração 4" />
                            <p>Quadro Rick&Morty</p>
                            <p>Preço: $39.99</p>
                        </div>
                        <div className="produto">
                            <img src="../src/assets/Quadro-Zelda.png" alt="Decoração 5" />
                            <p>Quadro Zelda</p>
                            <p>Preço: $99.99</p>
                        </div>
                        <div className="produto">
                            <img src="../src/assets/Quadros-homer-pac-man.png" alt="Decoração 6" />
                            <p>Quadros homer e Pac-man</p>
                            <p>Preço: $154.99</p>
                        </div>
                        <div className="produto">
                            <img src="../src/assets/Quadros-star-wars.png" alt="Decoração 7" />
                            <p>Quadros star-wars</p>
                            <p>Preço: $199.99</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
