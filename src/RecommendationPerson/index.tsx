import './style.css';

type Props={
    direction : String;
    personPhoto : string;
    textRecommendation : string;
    author : string;
}

function RecommendationPerson ({direction, personPhoto, textRecommendation, author} : Props){
    return(
        <div className={`person-container direction${direction}`}>
            <img className="image-person-photo" src={personPhoto} alt="1234"/>
            <div className="recommendation-content">
                <p className="text-recommendation" >{textRecommendation}</p>
                <br/><br/>
                <p className="text-recommendation" >{author}</p>
            </div>
        </div>
    )
}

export default RecommendationPerson;