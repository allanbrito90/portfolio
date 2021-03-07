import './style.css';

type Props = {
    image: string;
    titulo: String;
    conteudo: String;
    link: string;
}


function ProjectCard({image, titulo, conteudo, link}:Props){


    return (
        <div className="card-container">
            <img 
                className="image-project" 
                src={image} 
                alt="img_project"
            />
            <h2>{titulo}</h2>
            <p className="card-content">
                {conteudo}
            </p>
            <button type="button" className="btn btn-dark">
                Teste
            </button>
        </div>
    )
}

export default ProjectCard;