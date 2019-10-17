import React from 'react';

import { Container } from './styles';

import imgJS from '../../assets/javascript.svg'
import imgNode from '../../assets/nodejs.svg'
import imgReact from '../../assets/reactjs.svg'

export default function Technologies() {
  return (
    <Container>
        <h1>Tecnologias:</h1>

        <div className="images">
            <img src={imgJS} alt=""/>
            <img src={imgNode} alt=""/>
            <img src={imgReact} alt=""/>
        </div>
    </Container>
  );
}
