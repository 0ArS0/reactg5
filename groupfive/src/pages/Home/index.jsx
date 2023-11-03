import React from 'react'
import '../Home/style.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../components/Footer';

export default function Home() {

    return (
        <>
            <Header />
            <main className='paginaPrincipal'>
                <div style={{ display: "block" }}>
                    <h2 className='titulo'>PROMOÇÃO BLACK FRIDAY</h2>
                    {/*se quiser, tem como adicionar o parametro fade no Carousel*/}
                    <Carousel controls={false} indicators={false} className='carrossel'>
                        <Carousel.Item interval={300}>
                            <Link>
                                <img className='d-block w100'
                                    src="https://media.discordapp.net/attachments/11352593245082810/1170088901969457292/camiseta-preta-simples-usada-por-um-homem_1_1.jpg?ex=6557c535&is=65455035&hm=137cd327b241b2d4f7215bfd6e4ea82ee797f2b14b5e9621d873c707cd17539d&=&width=641&height=702"
                                    alt="Image One"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={300}>
                            <Link>
                                <img className='d-block w100'
                                    src="https://media.discordapp.net/attachments/1135259324508283000/1170088902992855092/retrato-de-jovem-bonito-em-um-cinza_1.jpg?ex=6557c535&is=65455035&hm=68a52ee323d3c4c98b60b03c4a61bb64aa2aafa499e61f4b9162c806da92787e&=&width=641&height=702"
                                    alt="Image Two"
                                />
                            </Link>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </main>
            <Footer />
        </>
    )
}   
