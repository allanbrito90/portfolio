import './style.css';

import { Button } from 'reactstrap';

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
            <h4>{titulo}</h4>
            <p className="card-content">
                {conteudo}
            </p>
            <a href={link} target="_blank">
                <Button color="secondary">More Info</Button>
            </a>
        </div>
    )
}

export default ProjectCard;