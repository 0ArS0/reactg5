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
        <div className="Carrousel" style={{ display: "block" }}>
          <Carousel controls={false} indicators={true} indicatorLabels={["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"]} className='carrossel'>
            <Carousel.Item interval={3400}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/blackFriday.png"
                  alt="Image One"
                />
              </Link>            
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/pac-man.png"
                  alt="Image Two"
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/Caneca Vicente Jóia.png"
                  alt="Image Three"
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/lol.png"
                  alt="Image Four"
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/lyza.png"
                  alt="Image Five"
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/Quadro Jar-Jar Binks.png"
                  alt="Image Six"
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/Camisa Pato.png"
                  alt="Image Seven"
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
