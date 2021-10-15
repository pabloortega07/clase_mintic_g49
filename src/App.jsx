import logo from './media/logo.png';
import './styles/style.css';
import bordercollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
import husky from './media/husky.jpg';
import pitbull from './media/pitbull.jpg';
import pastor from './media/pastor.jpg';

function App() {
  return (
    <div className="App">
      <header>

      <ul className="navbar">
        <li>
          <img src={logo} alt="imagen" className="logo" />
        </li>
        <li>
          <button className="botonGenerico mainButton">Nuevo post</button>
        </li>
        <li>
          <div className="buscar">
            <input placeholder="Buscar una raza" />
            <i className="fas fa-search botonGenerico iconoBusqueda"></i>
          </div>
        </li>
        <li><button className="botonGenerico secondaryButton">Login</button></li>
        <li><button className="botonGenerico mainButton">Registro</button></li>
      </ul>
    </header>

    <main>
      <section>
        <h1>Razas de Perros</h1>
        <ul className="breedCardContainer">
         <CardRazasPerros nombreraza="BorderCollie" imagen={bordercollie}/>
         <CardRazasPerros nombreraza="Rhodesian" imagen={rhodesian}/> 
         <CardRazasPerros nombreraza="Husky" imagen={husky}/>
         <CardRazasPerros nombreraza="Pitbull" imagen={pitbull}/> 
         <CardRazasPerros nombreraza="Pastor" imagen={pastor}/> 

        </ul>
      </section>
      <section></section>
    </main>

    <footer></footer>  
  </div>
  );
}

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

export default App;