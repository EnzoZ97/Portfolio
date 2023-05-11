import { useState } from 'react';

import './Navbar.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";





const Navbar = () => {
    const [sideNavbarActive, setsideNavbarActive] = useState(false);


    return (
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
                <a className={sideNavbarActive ? "item item_active" : "item"}>Home</a>
                <a className={sideNavbarActive ? "item item_active" : "item"}>About me</a>
                <a className={sideNavbarActive ? "item item_active" : "item"}>Projects</a>
                <a className={sideNavbarActive ? "item item_active" : "item"}>Contanct</a>            
            </nav>
        </div>
    )
}

export default Navbar;