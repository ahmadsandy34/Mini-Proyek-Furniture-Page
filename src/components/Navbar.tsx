import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../assets/nav.svg';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>('Home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 650);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`navbar fixed top-8 left-0 right-0 z-50 transition-all duration-300 mx-auto lg:w-4/5 ${isScrolled ? 'bg-transparent text-black' : 'bg-transparent text-white'
                }`}
        >
            <div className="flex-1">
                <Link to="/" onClick={() => handleLinkClick('Home')}>
                    <span className="btn btn-ghost text-2xl lg:text-4xl font-bold">FurniShop</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-4 lg:flex hidden">
                    <li className={activeLink === 'Home' ? 'font-semibold' : 'font-normal'}>
                        <Link to="/" onClick={() => handleLinkClick('Home')}>
                            Home
                        </Link>
                    </li>
                    <li className={activeLink === 'About' ? 'font-semibold' : 'font-normal'}>
                        <a onClick={() => handleLinkClick('About')}>About</a>
                    </li>
                    <li className={activeLink === 'Feature' ? 'font-semibold' : 'font-normal'}>
                        <a onClick={() => handleLinkClick('Feature')}>Feature</a>
                    </li>
                    <li className={activeLink === 'Contact' ? 'font-semibold' : 'font-normal'}>
                        <a onClick={() => handleLinkClick('Contact')}>Contact</a>
                    </li>
                </ul>
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button className="btn btn-ghost" onClick={toggleMenu}>
                        <img
                            src={Nav}
                            alt="Nav"
                            className={`transition-colors duration-300 ${
                                isScrolled || isMenuOpen ? 'brightness-0' : ''
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <div className="flex justify-center items-center h-full">
                    <ul className="menu menu-vertical space-y-4 bg-white text-black w-full h-full justify-center items-center text-lg">
                        <p className="text-xl font-semibold mb-4">FurniShop</p>
                        <li className={activeLink === 'Home' ? 'font-semibold' : 'font-normal'}>
                            <Link to="/" onClick={() => handleLinkClick('Home')}>
                                Home
                            </Link>
                        </li>
                        <li className={activeLink === 'About' ? 'font-semibold' : 'font-normal'}>
                            <a onClick={() => handleLinkClick('About')}>About</a>
                        </li>
                        <li className={activeLink === 'Feature' ? 'font-semibold' : 'font-normal'}>
                            <a onClick={() => handleLinkClick('Feature')}>Feature</a>
                        </li>
                        <li className={activeLink === 'Contact' ? 'font-semibold' : 'font-normal'}>
                            <a onClick={() => handleLinkClick('Contact')}>Contact</a>
                        </li>

                        <button
                            className="btn btn-ghost text-xl absolute bottom-1"
                            onClick={toggleMenu}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
