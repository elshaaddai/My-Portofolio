import React, {useState} from 'react';
import "./header.css"

const Header = () => {
    window.addEventListener("scroll", function() {
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='logo'><h4>Elsha Tambuwun</h4></a>
                <div className={Toggle ? "Nav_Menu show-menu":"Nav_Menu"}>
                    <ul className='list'>
                        <li className='nav_item'>
                            <a href='#home' onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate nav_icon'></i> Home
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate nav_icon'></i> About
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#skills' onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate nav_icon'></i> Skills
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#project' onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate nav_icon'></i> Project
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate nav_icon'></i> Contact Me
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className='nav_toggle' onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;