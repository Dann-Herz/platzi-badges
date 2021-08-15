import React from 'react';
import './styles/Main.css';
import astronauts from '../images/astronauts.svg';
import stars from '../images/stars.svg';
import confLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

function Main () {
    return (
        <React.Fragment>
            <div className="background">
                <img src={stars} className="background-size" alt="" />
                <div className="background-message">
                    <img src={confLogo} className="background-message__Logo" alt="" />
                    <h1>Print Your Badges</h1>
                    <p>The easiest way to manage your conference</p>
                    <Link to="/badges" className="btn btn-primary">Start now</Link>                </div>
                <picture className="">
                    <img src={astronauts} className="size" alt="" />
                </picture>
            </div>
        </React.Fragment>
    )
}

export default Main