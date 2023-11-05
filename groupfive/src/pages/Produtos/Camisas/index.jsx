import React from 'react'
import '/src/pages/Produtos/style.css'
import HeaderMain from '../../../components/Header'
import './style.css'
import Footer from '../../../components/Footer'

export default function Camisas() {
    return (
        <>
        <HeaderMain />
            <main className="camisas">
                <div class="container-categorias">
                    <div className="categoria">
                        <div className="titulo">
                        <h3>Camisas</h3> <hr />
                        </div>
                        <div className="produtos-categoria">
                        <div class="produto">
                            <img src="../src/assets/Camisa-Pato.png" alt="Camisa 1" />
                            <p>Camisa Preta Pato</p>
                            <p>Preço: $19.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Camisa-Lyza-morticia.png" alt="Camisa 2" />
                            <p>Camisa Preta Lyza</p>
                            <p>Preço: $49.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Camisa-LoL.png" alt="Camisa 3" />
                            <p>Camisa Preta LoL</p>
                            <p>Preço: $19.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Camisa-minecraft.png" alt="Camisa 4" />
                            <p>Camisa Preta Minecraft</p>
                            <p>Preço: $24.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Camisa-pac-man.png" alt="Camisa 5" />
                            <p>Camisa Preta Pac-man</p>
                            <p>Preço: $39.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Camisa-playstation.png" alt="Camisa 6" />
                            <p>Camisa Preta Playstation</p>
                            <p>Preço: $19.99</p>
                        </div>
                        <div class="produto">
                            <img src="../src/assets/Camisa-xbox.png" alt="Camisa 7" />
                            <p>Camisa Preta Xbox</p>
                            <p>Preço: $24.99</p>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
