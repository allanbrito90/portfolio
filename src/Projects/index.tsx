import ProjectCard from '../ProjectCard';
import './style.css';

function Projects(){
    return (
        <div className="projects-container-back">    
            <div className="projects-container"> 
                <h1>Projects</h1>
                <div className="projects-card-container">
                    <ProjectCard 
                        image="https://www.getbidbar.com/assets/blog/programming_topics.jpg"
                        titulo="Teste 1" 
                        conteudo="Um projeto de controle financeiro residencial para ter todas as despesas e receitas num só clique. Também foi criado um módulo de objetivos para que você alcance seus sonhos. Clique abaixo para mais informações, saber quais tecnologias foram utilizadas e fazer o download. Disponível em Português (PT-BR) e Inglês. "
                    />
                    <ProjectCard 
                        image="https://www.getbidbar.com/assets/blog/programming_topics.jpg"
                        titulo="Teste 2" 
                        conteudo="Um projeto de controle financeiro residencial para ter todas as despesas e receitas num só clique. Também foi criado um módulo de objetivos para que você alcance seus sonhos. Clique abaixo para mais informações, saber quais tecnologias foram utilizadas e fazer o download. Disponível em Português (PT-BR) e Inglês. "
                    />
                    <ProjectCard 
                        image="https://www.getbidbar.com/assets/blog/programming_topics.jpg"
                        titulo="Teste 3" 
                        conteudo="Um projeto de controle financeiro residencial para ter todas as despesas e receitas num só clique. Também foi criado um módulo de objetivos para que você alcance seus sonhos. Clique abaixo para mais informações, saber quais tecnologias foram utilizadas e fazer o download. Disponível em Português (PT-BR) e Inglês. "
                    />
                    <ProjectCard 
                        image="https://www.getbidbar.com/assets/blog/programming_topics.jpg"
                        titulo="Teste 4" 
                        conteudo="Um projeto de controle financeiro residencial para ter todas as despesas e receitas num só clique. Também foi criado um módulo de objetivos para que você alcance seus sonhos. Clique abaixo para mais informações, saber quais tecnologias foram utilizadas e fazer o download. Disponível em Português (PT-BR) e Inglês. "
                    />
                    <ProjectCard 
                        image="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem.jpg"
                        titulo="Teste 5" 
                        conteudo="Um projeto de controle financeiro residencial para ter todas as despesas e receitas num só clique. Também foi criado um módulo de objetivos para que você alcance seus sonhos. Clique abaixo para mais informações, saber quais tecnologias foram utilizadas e fazer o download. Disponível em Português (PT-BR) e Inglês. "
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;