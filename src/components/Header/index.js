import React, {useState, useRef} from 'react';
import "./header.css"

const Header = () => {

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    
    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className='header fade-in-text'>
            <nav className='nav container'>
                <a href='index.html' className='logo'><h4>Elsha Tambuwun</h4></a>
                <div className={`Nav_Menu ${Toggle ? "active" : ""}`}>
                    <ul className='list'>
                        <li className='nav_item'>
                            <a 
                            href='#home' 
                            onClick={() => {
                                setActiveNav("#home")
                                scrollToSection(homeRef);
                            }}
                            className={activeNav === "#home" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate'></i> Home
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#about' onClick={() => {
                                setActiveNav("#about")
                                scrollToSection(aboutRef);
                            }}
                                className={activeNav === "#about" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate'></i> About
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#skills' onClick={() => {
                                setActiveNav("#skills")
                                scrollToSection(skillsRef);
                            }} 
                                className={activeNav === "#skills" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate'></i> Skills
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#project' onClick={() => {
                                setActiveNav("#project")
                                scrollToSection(projectRef);
                            }} 
                                
                                className={activeNav === "#project" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate'></i> Project
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#contact' onClick={() => {
                                setActiveNav("#contact")
                                scrollToSection(contactRef);
                            }} 
                                className={activeNav === "#contact" ? "Nav_link active-link" : "nav_link"}>
                                <i className='uil uil-estate nav_icon'></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times' onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className='nav_toggle' onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;