import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
   
        const linkStyle = {
            fontWeight: "bold",
            color: "red",
            textDecoration: "none"
        }
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div class="container-fluid">
                    <a class="ancor navbar-brand fs-4 fw-bold coursea" href="www.google.com">Leanguage Learning Center</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/home"
                                    activeStyle={linkStyle}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/services"
                                    activeStyle={linkStyle}
                                >
                                    Services
                                </NavLink>
                            </li>
    
                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/about"
                                    activeStyle={linkStyle}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/contact"
                                    activeStyle={linkStyle}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        
    );
};

export default Header;