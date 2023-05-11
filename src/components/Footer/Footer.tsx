import './Footer.scss';

import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-content">
                <h1>Contant</h1>
                <div className="email">
                    <HiOutlineMail className="email-icon" />
                    <p className="email-text">Email:</p>
                    <p className="email-text">enzozalazar.97@gmail.com</p>
                </div>
                <a href="https://www.linkedin.com/in/enzo-roberto-zalazar-451147225/" 
                className="linkedin"  target="_blank" rel="noopener noreferrer"  >
                    <AiFillLinkedin className="linkedin-icon" />
                    <p className="linkedin-text">Linkedin</p>
                    
                </a>
            </div>
        </section>
    )
}

export default Footer;