import './style.css';

type Props = {
    logo : string;
    site : string;
}

function transformSite (site : string){
    if(site.includes("mailto")){
        return site;
    }else{
        return "https://" + site;
    }
}

function transformLink (link : string){
    if(link.includes("mailto")){
        return link.replace("mailto:","");
    }else{
        return link;
    }
}

function Contact ({logo,site} : Props) {
    return(
        <div className="contact-container">
            <a href={transformSite(site)} target="_blank">
            <img className="contact-logo" src={logo} alt="icon"/>
            </a>
            <a className="contact-content texto-escuro" href={transformSite(site)} target="_blank">{transformLink(site)}</a>
        </div>
    )
}

export default Contact;