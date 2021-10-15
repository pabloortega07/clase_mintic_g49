import {Link} from 'react-router-dom'

function CardRazasPerros({nombreraza,imagen}){
    return(
      <li className="breedCard backgroundred">
          <Link to='rhodesian'>
            <div className="contenedorImagen">
                <img src={imagen} alt={nombreraza} />
            </div>
          </Link>            
            <span className="breedTitle">{nombreraza}</span>
      </li>
  
    )
  }

  export default CardRazasPerros;