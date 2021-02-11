import React, { useEffect, useState } from "react";
import Header from "../Header";
import Projects from "../Projects";
import WhoAmI from "../WhoAmI";
import Recommendations from "../Recommendations";
import FotoPrincipal from './Allan_Brito_Capa.jpeg';
import './style.css';
import ContactMe from "../ContactMe";

function Home(){
    return(
        <div>
            <Header />
            <div className="container-principal fundo">                
                <div className="entrada-container">
                    <img className="image-logo" src={FotoPrincipal} alt="Allan_Brito_Foto"/>
                    <h1 className="entrada-content">
                        Hello World,<br />
                        I'm Allan Brito
                    </h1>   
                </div>
                <h4 className="entrada-subtitle">
                    Back End Developer |  Web Developer | Java Developer | JavaFX Developer
                </h4>
            </div>
            <div>
                <WhoAmI />
                <Projects />
                <Recommendations />
                <ContactMe />
            </div>
        </div>

        
    )
}

export default Home;