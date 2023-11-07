import React, { Component } from 'react'
import "./style.css"
export default class Contador extends Component {
    constructor(props) {
        super(props)
        this.black = new Date('2023-11-24T00:00:00Z');
        this.state = {
            dias: 0,
            horas: 0,
            minutos: 0,
            segundos: 0,
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(this.contagem, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    contagem = () => {
        const dataAtual = new Date()
        const diferenca = this.black - dataAtual
        if (diferenca <= 0) {
            clearInterval(this.intervalId)
            return;
        }
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60) / 1000));
        this.setState({ dias, horas, minutos, segundos })
    }

    render() {
        const { dias, horas, minutos, segundos } = this.state
        return (
            <div className="atrasContador">
                <div className="contador">
                    <p>
                        Contagem regressiva para a Black Friday: <span>{dias}</span> dias, <span>{horas}</span> horas, <span>{minutos} </span> minutos, <span>{segundos}</span> segundos.
                    </p>
                </div>
            </div>
        )
    }
}
