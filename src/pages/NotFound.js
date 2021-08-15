import React from 'react';
import './styles/NotFound.css'
import astronaut from '../images/AstronautMoon404.png'
import stars from '../images/stars.svg'
import { Link } from 'react-router-dom';

function NotFound () {
    return (
        <React.Fragment>
            <div className="background2">
                <img src={stars} className="background-size2" alt="" />
                <div className="background-message2">
                    <h1>Not Found 404</h1>
                    <p>It seems you are lost cowboy</p>
                    <Link to="/badges/Main" className="btn btn-primary">Go back home?</Link>
                </div>
                <picture className="">
                    <img src={astronaut} className="size2" alt="" />
                </picture>
            </div>
        </React.Fragment>
    )
}

export default NotFound