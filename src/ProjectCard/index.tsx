import './style.css';

type Props = {
    image: string;
    titulo: String;
    conteudo: String;
}


function ProjectCard({image, titulo, conteudo}:Props){


    return (
        <div className="card-container">
            <img 
                className="image-project" 
                src={image} 
                alt="img_project"
            />
            <h1>{titulo}</h1>
            <p>
                {conteudo}
            </p>
            <button className="card-container-button">
                Mais informações
            </button>
        </div>
    )
}

export default ProjectCard;