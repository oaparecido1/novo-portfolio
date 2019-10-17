import React from "react";

import { Container } from "./styles";
import imgGithub from "../../assets/github.svg";
import imgInstagram from "../../assets/instagram.svg";
import imgGmail from "../../assets/google-plus.svg";

export default function Header() {
  return (
    <Container>
      <h1>daniel aparecido de souza santos</h1>
      <div className="images">
        <a href="https://github.com/oaparecido1">
          <img src={imgGithub} alt="github" />
        </a>
        <a href="https://www.instagram.com/daniels.css/?hl=pt-br">
          <img src={imgInstagram} alt="github" />
        </a>
        <a href="mailto:daniel.aparecido4683@gmail.com?Subject=Contato%20para%20Portfolio">
          <img src={imgGmail} alt="github" />
        </a>
      </div>
    </Container>
  );
}
