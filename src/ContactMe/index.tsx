import Contact from "../Contact";
import LinkedInLogo from "./linkedin_icon.png";
import EMailLogo from "./email_icon.png";
import GitHubLogo from "./github_icon2.png";
import FacebookLogo from "./facebook_icon2.png";
import InstagramLogo from "./instagram_icon2.png";
import CodeWarsLogo from "./codewars_icon.png";


function ContactMe () {
    return(
        <div id="contactMe" className="box-container">
            <h1>Contact Me</h1>
            <p>
                Thanks for visiting my website, if you want to keep in touch, please contact me.
            </p>
            <ul>
                <li>
                    <Contact 
                    logo = {LinkedInLogo}
                    site = "linkedin.com/in/allan-brito"
                    />
                </li>
                <li>
                    <Contact 
                    logo = {EMailLogo}
                    site = "mailto:allan.brito@outlook.com.br"
                    />
                </li>
                <li>
                    <Contact 
                    logo = {GitHubLogo}
                    site = "github.com/allanbrito90/"
                    />
                </li>
                <li>
                    <Contact 
                    logo = {FacebookLogo}
                    site = "facebook.com/allan.brito.5/"
                    />
                </li>
                <li>
                    <Contact 
                    logo = {InstagramLogo}
                    site = "instagram.com/allan._brito/"
                    />
                </li>
                <li>
                    <Contact 
                    logo = {CodeWarsLogo}
                    site = "codewars.com/users/allan.brito"
                    />
                </li>
            </ul>
        </div>
    )
}

export default ContactMe;