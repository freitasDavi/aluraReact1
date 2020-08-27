import React, { Component} from 'react';

import style from './style.css'

class CardNota extends Component {
    render() {
        return (
         <section className="card-nota">
            <header>
              <h3>{this.props.titulo}</h3>
            </header>
            <p>{this.props.texto}</p>
          </section>
        );
    }
}

export default CardNota;