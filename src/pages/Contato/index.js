import React  from 'react';
import {Link} from 'react-router-dom';

function Contato (){
  return(
    <div className='container'>
       <h1> pagina Contato</h1>
       <span>Contato da empresa (ddd) xxxx-xxxx</span>
       <br/><br/>
       <Link to="/"> Pagina Home</Link><br/>
       <Link to="/sobre">Sobre</Link>
    </div>
  )
}
export default Contato;