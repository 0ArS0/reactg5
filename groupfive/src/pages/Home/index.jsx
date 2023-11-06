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
        <div className="texto">
          <h1>Seja Bem-Vindo(a)</h1> <hr />
          <p>A nossa loja dedicada ao mundo dos produtos geeks e otakus, onde a paixão pelos animes e ficção cientifica é a nossa força motriz! 🎌</p>
          <p>Compreendemos o amor e a devoção que os fãs de animes têm por esse universo único, assim como a paixão dos geeks por todas as formas de entretenimento nerd. Seja você um ninja em busca de roupas e acessórios inspirados em Naruto, um alquimista à procura de decorações de Fullmetal Alchemist ou um fã de qualquer outro anime, você está no lugar certo</p>
        </div>
        <div className="Carrousel" style={{ display: "block" }}>
          <Carousel controls={false} indicators={true} indicatorLabels={["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"]} className='carrossel'>
            <Carousel.Item interval={3400}>
              <img className='d-block w100'
                src="src/assets/blackFriday.png"
                alt="Image One" />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img className='d-block w100'
                src="src/assets/Camisa-pac-man.png"
                alt="Image Two"
              />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img className='d-block w100'
                src="src/assets/Caneca-Vicente-Jóia.png"
                alt="Image Three"
              />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img className='d-block w100'
                src="src/assets/Camisa-Lol.png"
                alt="Image Four"
              />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img className='d-block w100'
                src="src/assets/Camisa-Lyza-morticia.png"
                alt="Image Five"
              />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img className='d-block w100'
                src="src/assets/Quadro-Jar-Jar-Binks.png"
                alt="Image Six"
              />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img className='d-block w100'
                src="src/assets/Camisa-Pato.png"
                alt="Image Seven"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <Footer />
    </>
  )
}   
