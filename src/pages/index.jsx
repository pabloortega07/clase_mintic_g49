//import logo from 'media/logo.png';
import CardRazasPerros from 'components/CardRazasPerros';
import bordercollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import husky from 'media/husky.jpg';
import pitbull from 'media/pitbull.jpg';
import pastor from 'media/pastor.jpg';
//import Header from 'components/Header';
//import Footer from 'components/Footer';
//import Layout from 'layouts/Layout';



function Index (){
return (  

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
          
    );
}

export default Index;

/* esto es un comentario
<Footer />  reemplaza <footer></footer> 
<header />  reemplaza <footer></footer>
*/

// QUe miercoles