import { useState } from 'react';
import './Main.scss';

import Presentation from '../Presentation/Presentation';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Main = () => {
    const [sideNavbarActive, setsideNavbarActive] = useState(false);

    return (
        <div className="main">
            <div className="Navbar" >
            <nav className={sideNavbarActive ? "nav Navbar_active" : "nav"}>
                {
                    sideNavbarActive === false
                    ?
                    <div className="hamburger_icon" onClick={() => setsideNavbarActive(true)}>
                        <GiHamburgerMenu />
                    </div>
                    :
                    <div className="close_icon" onClick={() => setsideNavbarActive(false)}>
                        <AiOutlineClose />
                    </div>
                }
                <a className={sideNavbarActive ? "item item_active" : "item"}
                    href="#" onClick={() => setsideNavbarActive(false)}>Home</a>
                <a className={sideNavbarActive ? "item item_active" : "item"}
                    href="#Profile" onClick={() => setsideNavbarActive(false)}>About me</a>
                <a className={sideNavbarActive ? "item item_active" : "item"}
                    href="#Projects" onClick={() => setsideNavbarActive(false)}>Projects</a>
                <a className={sideNavbarActive ? "item item_active" : "item"}
                    href="#Footer" onClick={() => setsideNavbarActive(false)}>Contanct</a>            
            </nav>
        </div>

            <Presentation />

            <div id="Profile">
                <Profile />
            </div>
            
            <div id="Projects">
                <Projects />
            </div>
            
            <Skills />

            <div id="Footer">
                <Footer />
            </div>
            
            
        </div>
    )
}

export default Main;