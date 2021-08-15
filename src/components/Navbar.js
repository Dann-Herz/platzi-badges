import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navbar.css";
import Logo from '../images/logo.svg';

//font-weight-light y font-weight-bold no me funcionaban en su lugar usé los de abajo de bootstrap

class Navbar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
                        <span className="fw-light">Platzi</span> 
                        <span className="fw-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Navbar