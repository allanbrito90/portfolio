import './style.css';
function Header(){
    return(
        <div>
            <nav className="header-container">
               <li><a href="#home" className="header-content">Home</a></li>
               <li><a href="#whoami" className="header-content">Who Am I?</a></li>
               <li><a href="#projects" className="header-content">Projects</a></li>
               <li><a href="#recommendations" className="header-content">Recommendations</a></li>
               <li><a href="#contactMe" className="header-content">Contact Me</a></li>
            </nav>
        </div>
    )
}

export default Header;