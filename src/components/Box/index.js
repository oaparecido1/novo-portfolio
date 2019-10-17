import React from "react";

import { Container } from "./styles";

export default function Box() {
  return (
    <Container>
      <div className="box">
        <a href="#">AirCnC</a>
        <p>
          Criei o backend, frontend e o app mobile, em conjunto com o Diego
          Fernandes, na semana <strong>Omnistack</strong>.
        </p>
      </div>

      <div className="box">
        <a href="#">Alura</a>
        <p>
          Criei alguns projetos frontend com os cursos da alura, utilizando
          <strong> flexbox</strong> e <strong>grid</strong>.
        </p>
      </div>

      <div className="box">
        <a href="#">Rocketfy</a>
        <p>
          Criei o frontend do <strong>pipefy</strong>, juntamente com o Diego
          Fernandes, em um dos seus cursos no <strong>youtube</strong>.
        </p>
      </div>
    </Container>
  );
}
