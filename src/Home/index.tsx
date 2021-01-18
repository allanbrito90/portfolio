import Header from "../Header";
import WhoAmI from "../WhoAmI";
import FotoPrincipal from './Allan_Brito_Capa.jpeg';
import './style.css';

function Home(){
    return(
        <>
            <Header />
            <div className="entrada-container">
                <img className="image-logo" src={FotoPrincipal} alt="Allan_Brito_Foto"/>
                <h1 className="entrada-content">
                    Hello World,<br />
                    I'm Allan Brito
                </h1>   
            </div>
            <h4 className="entrada-subtitle">
                Back End Developer |  Web Developer | Java Developer | JavaFX Developer
            </h4>
            <div>
                <WhoAmI />
            </div>
        </>

        
    )
}

export default Home;