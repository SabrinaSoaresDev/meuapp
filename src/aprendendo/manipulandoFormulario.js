import React, {Component} from 'react';

class App extends Component{
constructor(props){
  super(props);
  this.state={
      form: {
        nome: '',
        email: '',
        senha:'',
        sexo: ''
      }
  }
  this.dadosForm= this.dadosForm.bind(this);

}
dadosForm(e){
  let form = this.state.form;
  form[e.target.nome] = e.target.value;
  this.setState({form: form});
}

// trocaEmail(e){
//   let valorDigitado = e.target.value;
//   this.setState({email:valorDigitado});
// }
// trocaSexo(e){
//   let valorDigitado = e.target.value;
//   this.setState = ({sexo: valorDigitado});
// }

// cadastrar(event){
//   const {nome, email, senha} =this.state;
//   if(nome !== '' && email !== '' && senha !== ''){
//     alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`  );
//   }else{
//       this.setState({error: 'Ops! Parece que esta faltando algo!'});
//   }

//   event.preventDefault();

// }

  render(){
    return(
      <div>
        <h1>Login</h1>
      
        {/* {this.state.error && <p>{this.state.error}</p>} */}
        
          <label>Nome:</label>
          <input type="text" name='nome' value={this.state.form.nome} onChange={this.dadosForm} /><br/>
          <label>Email:</label>
          <input type="email" name='email' value={this.state.form.email} onChange={this.dadosForm}  /><br/>
          <label>Senha:</label>
          <input type="password" name='senha' value={this.state.form.senha} onChange={this.dadosForm}  />
          <br/>
          <label>Sexo:</label>
          <select name='sexo' value={this.state.form.sexo} onChange={this.dadosForm}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
             </select>
          {/* //<button type='submit' >Cadastrar</button> */}
          <div>
            <h1>{this.state.form.email}</h1>
            <h1>{this.state.form.senha}</h1>
            <h1>{this.state.form.sexo}</h1>
          </div>
      </div>
    )
  }
}

export default App;