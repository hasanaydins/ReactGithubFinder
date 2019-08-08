import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({icon, title}) => {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark shadow mb-4">
            <Link className="navbar-brand  font-weight-bold" to="/"><i className={icon}/> {title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end font-weight-light" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                <li className="nav-item ">
                    <Link className="nav-link " to="/">Home</Link>
                </li>       
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user/hasanaydins">My Profile</Link>
                </li>
                </ul>
            </div>
            </nav>

        );
    
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github mr-2'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
