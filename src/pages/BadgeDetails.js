import React from 'react';
import './styles/BadgeDetails.css';

import confLogo from '../images/platziconf-logo.svg';

class BadgeDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="BadgeDetails__hero-container">
                        <div className="">
                            <div className="">
                                <img className="BadgeDetails__hero-container-logo" src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className=""></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeDetails;