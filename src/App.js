import { useEffect, useState } from "react";
import "./App.css";
import banner from "./Assets/img/banner.png";
import logo from "./Assets/img/logo.png";
import Prato from "./Componentes/Prato/prato";

function App() {

  const [pratos, setPratos] =  useState([])

  useEffect(() => {
    fetch('https://curso-alura-pizza.herokuapp.com/api/pratos/')
      .then(resposta => resposta.json())
      .then(dados => {
        console.log(dados)
        setPratos(dados)
      })
  },[])
  return (
    <div className="App">
      <div className="banner-container">
        <img src={banner} alt="Um banner mostrando uma pizza" />
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo Alura Pizza" />
      </div>

      <section className="cardapio">
        {pratos.map(prato => 
        <Prato 
          key={prato.id} 
          nome={prato.nome} 
          descricao={prato.descricao} 
          imagem={prato.imagem} 
          preco={prato.preco}
        />)}

      </section>
    </div>
  );
}

export default App;
