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
          {/*se quiser, tem como adicionar o parametro fade no Carousel*/}
          <Carousel controls={false} indicators={false} className='carrossel'>
           
            <Carousel.Item interval={3000}>
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
                  src="src/assets/jar-jar-sith.png"
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
                  src="src/assets/pac-man.png"
                  alt="Image Two"
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={1800}>
              <Link>
                <img className='d-block w100'
                  src="src/assets/vicJoia.png"
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
