import ProjectCard from '../ProjectCard';
import TicTacToe from './tictactoe.png';
import DsDelivery from './dsdelivery.png';
import Portfolio from './portfolio.png';
import HouseController from './housecontroller.png';
import Proffy from './proffy.png';
import './style.css';

function Projects(){    

    return (
        <div className="projects-container-back">    
            <div id="projects" className="projects-container"> 
                <h1>Projects</h1>
                <div className="projects-card-container">
                    <ProjectCard 
                        image={HouseController}
                        titulo="House Controller"
                        conteudo="A residencial finance control program to have all your expenses one click away. In this same program, was created a goal module to you to achieve your dreams. Click down below for more informations, to know what tecnologies were used and clone the repository. Available in English and Portuguese (PT-BR)."
                        link="https://github.com/allanbrito90/houseController"
                    />
                    <ProjectCard 
                        image={TicTacToe}
                        titulo="Tic Tac Toe" 
                        conteudo="Game created in JavaScript to test my knowledges with this tecnology. Click down below to get more informations and to play with a partner."
                        link="https://github.com/allanbrito90/ticTacToeJS"
                    />
                    <ProjectCard 
                        image={Portfolio}
                        titulo="Portfolio" 
                        conteudo="This website was also elaborated with some techniques and tecnologies. I could use some website makers but I prefered to use technologies that a could show my capacity. Click down below for more informations."
                        link="https://github.com/allanbrito90/portfolio"
                    />
                    <ProjectCard 
                        image={DsDelivery}
                        titulo="DS Delivery" 
                        conteudo="A project made in the second edition of Dev Superior Week, a free week building a full delivery app system with a mobile and online database. Click down below for more informations."
                        link="https://github.com/allanbrito90/dsdeliver-sds2"
                    />
                    <ProjectCard 
                        image={Proffy}
                        titulo="Proffy" 
                        conteudo="A project made in the second edition of Next Level Week, a full week of coding using HTML, CSS and Javascript to build a system that connects teachers to students. Click down below to access more informations."
                        link="https://github.com/Projetos-JavaScript/NLW-2"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;