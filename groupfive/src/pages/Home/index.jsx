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
                   
                        <Carousel.Item interval={2500}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/blackFriday.png"
                                    alt="Image Two"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={1800}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/lol.png"
                                    alt="Image One"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={1800}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/lyza.png"
                                    alt="Image Two"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={1800}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/minecraft.png"
                                    alt="Image Two"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={1800}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/pac-man.png"
                                    alt="Image Two"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={1800}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/pato.png"
                                    alt="Image Two"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={1800}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/playstation.png"
                                    alt="Image Two"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item interval={1800}>
                            <Link>
                                <img className='d-block w100'
                                    src="src/assets/xbox.png"
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
