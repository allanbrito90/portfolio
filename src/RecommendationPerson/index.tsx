import './style.css';

type Props={
    direction : String;
}

function RecommendationPerson ({direction} : Props){
    return(
        <div className={`person-container direction${direction}`}>
            <img className="image-person-photo" src="https://www.getbidbar.com/assets/blog/programming_topics.jpg" alt="1234"/>
            <div className="recommendation-content">
                <p className="text-recommendation" >“O Allan é um ótimo profissional, dedicado e inteligente. Trabalhou aqui como programador e ajudou a criar sistemas importantes como o VP Net, um programa voltado a automação comercial. Ele é muito respeitoso e sabe tratar bem o cliente.”</p>
            </div>
        </div>
    )
}

export default RecommendationPerson;