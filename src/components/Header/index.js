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
        <img src={imgGithub} alt="github" />
        <img src={imgInstagram} alt="github" />
        <img src={imgGmail} alt="github" />
      </div>
    </Container>
  );
}
