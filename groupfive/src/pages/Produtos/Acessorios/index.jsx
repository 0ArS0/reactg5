import React from 'react'
import HeaderMain from '../../../components/Header'
import './style.css'
import Footer from '../../../components/Footer'

export default function Acessorios() {
    return (
        <>
            <HeaderMain />
            <main className="acessorios">
                <div class="container-categorias">
                    <div className="categoria">
                        <h3>Acessórios</h3> <hr />
                        <div class="produto">
                            <img src="../src/assets/Controle-Dragon-Ball.png" alt="Acessorios 1" />
                            <p>Controle Dragon Ball</p>
                            <p>Preço: $129.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Controle-Naruto.png" alt="Acessorios 2" />
                            <p>Controle Naruto</p>
                            <p>Preço: $149.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Controle-Naruto2.png" alt="Acessorios 3" />
                            <p>Controle Naruto</p>
                            <p>Preço: $99.99</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
