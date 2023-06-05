import React, { Component } from 'react';

const Equipe= (props) => {
return(
        <div>
          <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
          <Social fb={props.facebook} lk={props.linkedin} yt={props.youtube} />
        <hr/>
      
        </div>
);
}
const Sobre = (props) => {
  return(
      <div>
        <h2>Olá sou o(a) {props.nome}</h2>
        <h3>Trabalho como {props.cargo}</h3>
        <h4>Tenho {props.idade} anos </h4>
      </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.fb}>Facebook </a>
      <a href={props.lk}> Linkedin </a>
      <a href={props.yt}>youtube </a>
    </div>
  )
}
 function app(){
  return(
    <div>
      <h1>conheça nossa equipe:</h1>
      <Equipe nome="Lucas" cargo="programador" idade="29" facebook="https://pt-br.facebook.com" linkedin="https://linkedin.com" youtube="https://youtube.com" />
      <Equipe nome="Amanda" cargo="programador" idade="29" facebook="https://pt-br.facebook.com" linkedin="https://linkedin.com" youtube="https://youtube.com" />
      <Equipe nome="Mateus" cargo="programador" idade="29" facebook="https://pt-br.facebook.com" linkedin="https://linkedin.com" youtube="https://youtube.com" /
      >
    </div>
  )
}

export default props&Comp;