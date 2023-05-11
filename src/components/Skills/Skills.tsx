import './Skills.scss';

import { AiFillHtml5 } from "react-icons/ai";
import { FaTools } from "react-icons/fa";

const Skills = () => {
    return (
        <section className="skills">
                <div className="skills-box-content">
                    <h1 className="skills-title">My Skills</h1>
                    <div className="frontend">
                        <div className="frontend-title">
                            <h3 className="f_title">Frontend</h3>
                            <AiFillHtml5 className="f_icon" />
                        </div>
                        <div className="technologies-frontend">
                            <p className="Frontend-item">HTML</p>
                            <p className="Frontend-item">CSS</p>
                            <p className="Frontend-item">SASS</p>
                            <p className="Frontend-item">React</p>
                            <p className="Frontend-item">Redux</p>
                            <p className="Frontend-item">Bootstrap</p>
                            <p className="Frontend-item">jQuery</p>
                        </div>
                    </div>
                    <div className="Other">
                        <div className="other-title">
                            <h3 className="o_title">Other</h3>
                            <FaTools className="o_icon" />
                        </div>
                        <div className="other-technologies">
                            <p className="other-item">TypeScript</p>
                            <p className="other-item">Jest</p>
                            <p className="other-item">Java</p>
                            <p className="other-item">JUnit</p>
                            <p className="other-item">Git</p>
                            <p className="other-item">GitHub</p>
                            <p className="other-item">GitLab</p>
                            <p className="other-item">Netlify</p>                                      
                            <p className="other-item">Visual Studio Code</p>
                        </div>
                    </div>
                </div>
                
            </section>
    )
}

export default Skills;