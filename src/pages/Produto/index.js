import {useParams } from 'react-router-dom'

function Produto(){
    const { id} = useParams();
    return(
        <div>
            <h2>Pagina detalhe do PRODUTO</h2>
            <span>MEU PRODUTO é {id}</span>
        </div>
    )
}

export default Produto;