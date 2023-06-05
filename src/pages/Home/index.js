import React  from 'react';
import {Link} from 'react-router-dom';


function Home (){
 
  return(
    <div className='container'>
       <h1> Bem vindo a pagina home</h1>
       <span>sujeito programador</span>
        <br/><br/>
       <Link to="/sobre"> Sobre</Link><br/>
       <Link to="/contato" > Contato</Link><br/>
       <Link to="/produto">Produto</Link>

       <hr/>
       <Link to="/produto/1234">Acessar Produto 1234</Link>
    </div>
  )
}
export default Home;