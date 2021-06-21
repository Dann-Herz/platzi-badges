import React from 'react';

import ella from '../images/so.png'
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm.js'
import Badge from '../components/Badge'

class BadgeNew extends React.Component{
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName="Ban" 
                            lastName="Haru" 
                            twitter="samdoesarts" 
                            jobTitle="Concept Artist"
                            avatarUrl={ella}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BadgeNew