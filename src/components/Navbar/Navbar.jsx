import React from 'react'
import './Navbar.css'
import { useState } from 'react'

function Navbar({ theme, toggleTheme }) {
    // State for the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="site-header">
            <nav className="navbar">
                <div className="logo">AB</div>
                
                <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
                    <li><a href="#About" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>  
                </ul>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <button className="theme-toggle" onClick={toggleTheme} style={{borderRadius:'50%'}}>
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>

                    <button 
                        className="menu-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>
                </div>
            </nav>
        </header>
    );
}


export default Navbar