import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: 'matheus ',
      contador: 0 ,

    }
    this.aumentar = this.aumentar.bind(this);
    this.Diminuir = this.Diminuir.bind(this);
  }
  aumentar(){
    let state = this.state;
    state.contador += 1;
    state.nome ='jose';
    this.setState(state);
  }

  Diminuir(){
    let states = this.state;
    if(states.contador === 0){
      alert('Opa chegou a Zero!');
      return;
    }
    states.contador -= 1;
    this.setState(states);
  }

  render(){
    return(
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3><button onClick={this.Diminuir}>-</button> 
        {this.state.contador} 
        <button onClick={this.aumentar}>+</button></h3>
        
        
      </div>
    )
  }
}

export default App;