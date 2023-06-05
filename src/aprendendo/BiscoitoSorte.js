import React, {Component} from 'react';
import './estilo.css';

class App extends Component{
constructor(props){
  super(props);
  this.state={
    textoFrase: ''
  };
  this.quebraBiscoito= this.quebraBiscoito.bind(this);
      this.frases= [ 'siga os bons e aprenda com eles', 'o bom-senso vale mais do que muito',
      'o riso é a menor distancia entre duas pessoas ', 'deixe de lado as preocupações e seja feliz. '

      ];
}
quebraBiscoito(){
  let state = this.state;
  let numeroAleatorio = Math.floor(Math.random()* this.frases.length);
  state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
  this.setState(state);
}
  render(){
    return(
      <div className='container'>
        <img src={require("./assests/biscoito.png")} className="img" />
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div >
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;