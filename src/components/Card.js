import React, { Component } from 'react';
import './style.css';

class Card extends Component {
  render() {
    const personajes = [{
      nombre: 'Eric Cartman', foto: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
    }, {
      nombre: 'Stan Marsh', foto: 'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'
    }, {
      nombre: 'Kyle Broflovski', foto: 'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'
    }, {
      nombre: 'Kenny McCormick', foto: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
    }];
    return (
      <div>
        {
          personajes.map((element, index) => {
            return (
            <div className="card">
              <p className="info">Información</p>
              <p>Tarjeta N°{index + 1}: {element.nombre}</p>
              <img src={element.foto} alt="foto" className="picture"/>
            </div>
          )})
        }
      </div>
    )
  }
}

export default Card;