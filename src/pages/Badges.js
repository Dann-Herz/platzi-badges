import React from 'react';

import './styles/Badges.css';
import Navbar from '../components/Navbar';
import confLogo from '../images/badge-header.svg'

class Badges extends React.Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Badges;