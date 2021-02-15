import RecommendationPerson from "../RecommendationPerson";
import FotoRubens from "./rubinho.jpeg"
import './style.css';

function Recommendations(){
    return (
        <div id="recommendations" className="recommendation-container">
            <h1>Recommendations</h1>
            <RecommendationPerson 
            direction="1"
            personPhoto={FotoRubens}
            textRecommendation="“Allan is a great professional, dedicated and smart. Worked here as a programmer and helped to create important systems as VP Net, a program to improve the communication with external devices. He's respectful and know how to talk with customers.”"
            author="Rubens Carrasco - Comercial Automation Manager in Elgin S.A."
            />
        </div>
    )
}

export default Recommendations;