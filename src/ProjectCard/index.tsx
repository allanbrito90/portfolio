import './style.css';

type Props = {
    image: string;
    titulo: String;
    conteudo: String;
    link: string;
}


function ProjectCard({image, titulo, conteudo, link}:Props){


    return (
        <a href={link} target="_blank" className="card-button texto-escuro">
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
                <a className="card-button texto-claro" href={link} target="_blank">More Information</a> 
            </button>
        </div>
        </a>
    )
}

export default ProjectCard;