import React from 'react';

import "../styles/Navbar.css";
import Logo from '../images/logo.svg';

//font-weight-light y font-weight-bold no me funcionaban en su lugar usé los de abajo de bootstrap

class Navbar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
                        <span className="fw-light">Platzi</span> 
                        <span className="fw-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
};

export default Navbar