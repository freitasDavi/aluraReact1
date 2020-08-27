import React, { Component } from 'react'

import style from './style.css'

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }
    
    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto)
    }

    render() {
        return(
            <form onSubmit={this._criarNota.bind(this)}>
                <input type="text" placeholder="Título" onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea placeholder="Escreva sua nota..." rows={15} onChange={this._handleMudancaTexto.bind(this)}>

                </textarea>
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro