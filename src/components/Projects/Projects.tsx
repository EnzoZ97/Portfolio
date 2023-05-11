import './Projects.scss';

import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaCocktail } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const Projects = () => {
    return (
        <section className="Projects">
                <div className="box_p_title">
                    <h1 className="projects-title">My Projects</h1>
                </div>
                <div className="Project">
                    <div className="P_image">
                        <img src="./images/ecommerce.PNG"
                            className="image" />
                        <a href="https://afterlife-ecommerce.netlify.app" target="_blank" 
                                rel="noopener noreferrer" className="link">
                            <HiOutlineExternalLink className="icon" />
                        </a>
                    </div>
                    <div className="P_info">
                        <div className="P_info_title">
                            <h4 className="project-name">ecommerce</h4>
                            <BsFillCartCheckFill className="illustration" />
                        </div>
                        <p className="P_info_details">An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, 
                        and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
                        <div className="P_info_technologies">
                            <p className="technology">React</p>
                            <p className="technology">Redux</p>
                            <p className="technology">Typescript</p>
                            <p className="technology">SCSS</p>                            
                        </div>
                        <div className="P_info_link">
                            <a href="https://github.com/EnzoZ97/ecommerce.git" className="code" target="_blank" rel="noopener noreferrer">
                                <p className="github">Github</p>
                                <AiFillGithub className="github_icon" />
                            </a>
                            <a href="https://afterlife-ecommerce.netlify.app" className="live_demostration" target="_blank" rel="noopener noreferrer">
                                <p className="desmostration">Live Demo</p>
                                <HiOutlineExternalLink className="desmotration-icon" />
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="Project">
                    <div className="P_image">
                        <img src="./images/cocktails.PNG"
                            className="image" />
                        <a href="https://cocktails-and-details.netlify.app" target="_blank" 
                                rel="noopener noreferrer" className="link">
                            <HiOutlineExternalLink className="icon" />
                        </a>
                    </div>
                    <div className="P_info">
                        <div className="P_info_title">
                            <h4 className="project-name">Cocktails and details</h4>
                            <FaCocktail className="illustration" />
                        </div>
                        <p className="P_info_details">An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, 
                        and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
                        <div className="P_info_technologies">
                            <p className="technology">React</p>
                            <p className="technology">Redux</p>
                            <p className="technology">Typescript</p>
                            <p className="technology">Bootstrap</p>  
                            <p className="technology">SCSS</p>                            
                        </div>
                        <div className="P_info_link">
                            <a href="https://cocktails-and-details.netlify.app" className="code" target="_blank" rel="noopener noreferrer">
                                <p className="github">Github</p>
                                <AiFillGithub className="github_icon" />
                            </a>
                            <a href="https://github.com/EnzoZ97/cocktails-and-details.git" className="live_demostration" target="_blank" rel="noopener noreferrer">
                                <p className="desmostration">Live Demo</p>
                                <HiOutlineExternalLink className="desmotration-icon" />
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="Project">
                    <div className="P_image">
                        <img src="./images/dog_pictures.PNG"
                            className="image" />
                        <a href="https://gallery-of-dog-pictures.netlify.app" target="_blank" 
                                rel="noopener noreferrer" className="link">
                            <HiOutlineExternalLink className="icon" />
                        </a>
                    </div>
                    <div className="P_info">
                        <div className="P_info_title">
                            <h4 className="project-name">Gallery of dog pictures</h4>
                            <FaDog className="illustration" />
                        </div>
                        <p className="P_info_details">An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, 
                        and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
                        <div className="P_info_technologies">
                            <p className="technology">React</p>
                            <p className="technology">Redux</p>
                            <p className="technology">Typescript</p>
                            <p className="technology">SCSS</p>                            
                        </div>
                        <div className="P_info_link">
                            <a href="https://gallery-of-dog-pictures.netlify.app" className="code" target="_blank" rel="noopener noreferrer">
                                <p className="github">Github</p>
                                <AiFillGithub className="github_icon" />
                            </a>
                            <a href="https://github.com/EnzoZ97/gallery.git" className="live_demostration" target="_blank" rel="noopener noreferrer">
                                <p className="desmostration">Live Demo</p>
                                <HiOutlineExternalLink className="desmotration-icon" />
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="Project">
                    <div className="P_image">
                        <img src="./images/questions_and_answers.PNG"
                            className="image" />
                        <a href="https://quiz-questions-and-answers.netlify.app" target="_blank" 
                                rel="noopener noreferrer" className="link">
                            <HiOutlineExternalLink className="icon" />
                        </a>
                    </div>
                    <div className="P_info">
                        <div className="P_info_title">
                            <h4 className="project-name">Questions and Answers</h4>
                            <MdQuiz className="illustration" />
                        </div>
                        <p className="P_info_details">An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, 
                        and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
                        <div className="P_info_technologies">
                            <p className="technology">React</p>
                            <p className="technology">Redux</p>
                            <p className="technology">Typescript</p>
                            <p className="technology">SCSS</p>                            
                        </div>
                        <div className="P_info_link">
                            <a href="https://quiz-questions-and-answers.netlify.app" className="code" target="_blank" rel="noopener noreferrer">
                                <p className="github">Github</p>
                                <AiFillGithub className="github_icon" />
                            </a>
                            <a href="https://github.com/EnzoZ97/Questions-and-Answers.git" className="live_demostration" target="_blank" rel="noopener noreferrer">
                                <p className="desmostration">Live Demo</p>
                                <HiOutlineExternalLink className="desmotration-icon" />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </section>
    )
}

export default Projects;