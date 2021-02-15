import './style.css';
import Menu from './menu.png';
function Header2(){
    return(
        <div className="header2-container">
            <ul>
                <li className="menu-header2">
                    <img src={Menu} alt="menu-logo"/>
                    <ul>
                        <li><a href="#home" className="header-content">Home</a></li>
                        <li><a href="#whoami" className="header-content">Who Am I?</a></li>
                        <li><a href="#projects" className="header-content">Projects</a></li>
                        <li><a href="#recommendations" className="header-content">Recommendations</a></li>
                        <li><a href="#contactMe" className="header-content">Contact Me</a></li>
                    </ul>
                </li>
            </ul>
            
        </div>
    )
}

export default Header2;