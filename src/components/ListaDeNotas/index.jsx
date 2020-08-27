import React, { Component } from "react";
import CardNota from '../CardNota'

import style from './style.css'

class ListaDeNotas extends Component {

  render() {
    return (
      <ul>
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas