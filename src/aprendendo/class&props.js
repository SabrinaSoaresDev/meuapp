import React, {Component} from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        <Social />
        <hr></hr>
      </div>
    )
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2> Olá sou o(a) {this.props.nome}</h2>
        <h2> Cargo: {this.props.cargo}</h2>
        <h3>Idade: {this.props.idade} anos</h3>
        
      </div>
    )
  }
}

const Social = (props) => {
  return(
    <div>
      <a>Facebook </a>
      <a>linkedin </a>
      <a>youtube </a>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>
        Conheça nossa Equipe:
      </h1>
      <Equipe nome="Matheus" cargo="Programador" idade="24" />
      <Equipe nome="Lucas" cargo="Desing" idade="20" />
    </div>
  )
}

export default App;