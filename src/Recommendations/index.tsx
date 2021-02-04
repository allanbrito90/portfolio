import RecommendationPerson from "../RecommendationPerson";
import './style.css';

function Recommendations(){
    return (
        <div className="recommendation-container">
            <h1>Recommendations</h1>
            <RecommendationPerson direction="1"/>
            <RecommendationPerson direction="2"/>
        </div>
    )
}

export default Recommendations;