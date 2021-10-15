function CardRazasPerros({nombreraza,imagen}){
    return(
      <li className="breedCard backgroundred">
      <div className="contenedorImagen">
        <img src={imagen} alt={nombreraza} />
      </div>
      <span className="breedTitle">{nombreraza}</span>
    </li>
  
    )
  }

  export default CardRazasPerros;